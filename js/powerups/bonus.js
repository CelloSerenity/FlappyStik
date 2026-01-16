PowerupSystem.register('BONUS', {
    drawIcon: function(ctx, color) {
        const spikes = 5;
        const outerRadius = 8;
        const innerRadius = 4;
        let rot = Math.PI / 2 * 3;
        let x = 0; let y = 0;
        const step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(0, 0 - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = Math.cos(rot) * outerRadius;
            y = Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = Math.cos(rot) * innerRadius;
            y = Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(0, 0 - outerRadius);
        ctx.closePath();
        ctx.fill();
    },
    onCollect: function(bird, config) {
        score += 5;
        scoreEl.innerText = score;
    }
});
