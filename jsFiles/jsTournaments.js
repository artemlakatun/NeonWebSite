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
    {x :1300, y: 580},
    {x :1400, y: 730},
    {x :1350, y: 790},
    {x :990, y: 890},
    {x :550, y: 850},
    {x :250, y: 990},
    {x :150, y: 1100},
    {x :160, y: 1400},
    {x :390, y: 1400},
    {x :450, y: 1500},
    {x :650, y: 1700},
    {x :800, y: 1700},
    {x :950, y: 1550},
    {x :1150, y: 1150},
    {x :1200, y: 1400},
    {x :1400, y: 1800},
    {x :1200, y: 1950},
    {x :980, y: 2050},
    {x :500, y: 2050},
    {x :350, y: 1950},
    {x :310, y: 2000},
    {x :310, y: 2150},
    {x :310, y: 2650},
    {x :400, y: 2700},
    {x :800, y: 2670},
    {x :1000, y: 2650},
    {x :1000, y: 2350},
    {x :1200, y: 2340},

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
    ctx.arcTo(controlX, controlY, endX, endY, 45); // Изменяем радиус дуги по своему усмотрению
}
ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
ctx.stroke();

//плавный якорь навигации
const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}