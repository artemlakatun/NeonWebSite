const block = document.querySelector('.pictures');
const blockHeight = block.offsetHeight;
const canvas = document.querySelector('.wave-canvas');
canvas.width = block.offsetWidth;
canvas.height = blockHeight;
block.appendChild(canvas);
const ctx = canvas.getContext('2d');
ctx.setLineDash([15, 18]);
ctx.lineWidth = 2;
ctx.strokeStyle = 'white';

const points = [
    {x: 0 ,y: 0 },
    {x: 20, y: 10},
    {x :28, y: 200},
    {x :23, y: 280},
    {x :31, y: 310},
    {x :340, y: 350},
    {x :600, y: 220},
    {x :770, y: 150},
    {x :870, y: 180},
    {x :910, y: 200},
    {x :1100, y: 300},
    {x :1150, y: 390},
    {x :1150, y: 520},
    {x :1350, y: 580},
    {x :1350, y: 730},
    {x :1150, y: 790},
    {x :590, y: 890},
    {x :550, y: 850},
    {x :250, y: 990},
    {x :150, y: 1100},
    {x :160, y: 1400},
    {x :390, y: 1400},
    {x :450, y: 1500},

];
ctx.beginPath();
ctx.moveTo(points[0].x, points[0].y);

for (let i = 1; i < points.length - 1; i++) {
    const currentPoint = points[i];
    const nextPoint = points[i + 1];
    const controlX = currentPoint.x;
    const controlY = currentPoint.y;
    const endX = nextPoint.x;
    const endY = nextPoint.y;
    ctx.arcTo(controlX, controlY, endX, endY, 45); // Измените радиус дуги по своему усмотрению
}
ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
ctx.stroke();