PowerupSystem.register('SHRINK', {
    drawIcon: function(ctx, color) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.beginPath();
        
        ctx.moveTo(0, -8); ctx.lineTo(0, -2);
        ctx.moveTo(-3, -5); ctx.lineTo(0, -2); ctx.lineTo(3, -5);
        
        ctx.moveTo(0, 8); ctx.lineTo(0, 2);
        ctx.moveTo(-3, 5); ctx.lineTo(0, 2); ctx.lineTo(3, 5);
        ctx.stroke();
    },
    onCollect: function(bird, config) {
        bird.activateShrink(config.duration);
    }
});
