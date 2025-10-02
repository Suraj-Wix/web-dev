const container = document.getElementById('skeleton-container');
const totalSegments = 40; 
const waveAmplitude = 80; 
const waveFrequency = 0.05; 
const followSpeed = 0.08; 
const headRotationSpeed = 0.1; 
let timeOffset = 0; 
const allCentipedes = []; 

// --- Cursor Tracking Variables (Same) ---
let targetX = 300; 
let targetY = 300; 

document.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
});


// --- Centipede Class (UPDATED: Added 'head' class to segment 0) ---
class Centipede {
    constructor(segmentCount, baseClassName, trailOffsetFactor) {
        this.segments = [];
        this.segmentCount = segmentCount;
        this.baseClassName = baseClassName; // mother-centipede or baby-segment
        this.currentHeadX = 300;
        this.currentHeadY = 300;
        this.currentHeadAngle = -90;
        this.trailOffsetFactor = trailOffsetFactor; 

        this.initialiseBody();
    }

    createLeg(rotation, isLeft) {
        const leg = document.createElement('div');
        leg.className = 'leg';
        leg.style.transform = isLeft 
            ? `scaleX(-1) rotate(${rotation}deg)` 
            : `rotate(${rotation}deg)`; 

        const hand = document.createElement('div');
        hand.className = 'hand-detail';
        leg.appendChild(hand);
        return leg;
    }

    initialiseBody() {
        for (let i = 0; i < this.segmentCount; i++) {
            const segment = document.createElement('div');
            // Add base class and 'head' class if it's the first segment
            segment.className = `segment ${this.baseClassName} ${i === 0 ? 'head' : ''}`;
            
            // Add legs 
            if (i % 2 === 0 && i < this.segmentCount - 5) { 
                const legRotation = 45;
                segment.appendChild(this.createLeg(legRotation, false)); 
                segment.appendChild(this.createLeg(legRotation, true));  
            }

            container.appendChild(segment);
            this.segments.push(segment); 
        }
    }

    update(targetX, targetY, isMainCentipede = false) {
        let actualTargetX = targetX;
        let actualTargetY = targetY;

        if (!isMainCentipede) {
            const mother = allCentipedes[0];
            actualTargetX = mother.currentHeadX - (this.trailOffsetFactor * 100);
            actualTargetY = mother.currentHeadY - (this.trailOffsetFactor * 100);
        }

        // Movement and Rotation Logic (Same: aggressive follow)
        this.currentHeadX += (actualTargetX - this.currentHeadX) * followSpeed;
        this.currentHeadY += (actualTargetY - this.currentHeadY) * followSpeed;

        const dx = actualTargetX - this.currentHeadX;
        const dy = actualTargetY - this.currentHeadY;
        const desiredAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

        let angleDiff = desiredAngle - this.currentHeadAngle;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        this.currentHeadAngle += angleDiff * headRotationSpeed;


        // Update segments
        for (let i = 0; i < this.segmentCount; i++) {
            const segment = this.segments[i];
            
            const waveX = waveAmplitude * 0.5 * Math.sin(i * waveFrequency * 2 + timeOffset); 
            const segmentY = this.currentHeadY + (i * 15); 
            
            const segmentX = this.currentHeadX + waveX;
            let segmentRotation = this.currentHeadAngle + (waveAmplitude * 0.1 * Math.sin(i * waveFrequency * 2 + timeOffset));
            
            const depth = Math.round(Math.sin(i * waveFrequency * 2 + timeOffset) * 10);
            segment.style.zIndex = 100 + depth; 

            segment.style.left = `${segmentX}px`;
            segment.style.top = `${segmentY}px`;
            segment.style.transform = `rotate(${segmentRotation}deg)`;
        }
    }
}
// --- Centipede Class End ---


// --- Initial Setup and Family Creation (Same) ---

window.addEventListener('load', () => {
    const initialCenterX = container.offsetWidth / 2;
    const initialCenterY = container.offsetHeight / 2;

    // 1. Mother Centipede (Class 'mother-centipede' for head styling)
    const mother = new Centipede(totalSegments, 'mother-centipede', 0);
    mother.currentHeadX = initialCenterX;
    mother.currentHeadY = initialCenterY;
    allCentipedes.push(mother);

    // 2. Baby Centipede 1
    const baby1 = new Centipede(totalSegments / 2, 'baby-segment', 1.5); 
    baby1.currentHeadX = initialCenterX - 100;
    baby1.currentHeadY = initialCenterY + 100;
    allCentipedes.push(baby1);

    // 3. Baby Centipede 2
    const baby2 = new Centipede(totalSegments / 2, 'baby-segment', -1.5); 
    baby2.currentHeadX = initialCenterX + 100;
    baby2.currentHeadY = initialCenterY - 100;
    allCentipedes.push(baby2);
    
    animate();
});


// --- Global Animation Loop and Color Change (Same) ---
function animate() {
    timeOffset += 0.08; 
    allCentipedes[0].update(targetX, targetY, true); 
    for(let i = 1; i < allCentipedes.length; i++) {
        allCentipedes[i].update(allCentipedes[0].currentHeadX, allCentipedes[0].currentHeadY, false);
    }
    requestAnimationFrame(animate); 
}

let currentColorIndex = 0;
const colors = [
    { a: '#ffaaaa', b: '#ff0000' },
    { a: '#ffffaa', b: '#ff9900' },
    { a: '#aaffaa', b: '#00ff00' },
];

function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const newColor = colors[currentColorIndex];
    document.documentElement.style.setProperty('--glow-color-A', newColor.a);
    document.documentElement.style.setProperty('--glow-color-B', newColor.b);
}

setInterval(changeColor, 3000);