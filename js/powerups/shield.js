PowerupSystem.register('SHIELD', {
    drawIcon: function(ctx, color) {
        ctx.beginPath();
        ctx.moveTo(0, 8);
        ctx.lineTo(-7, 0);
        ctx.lineTo(-7, -5);
        ctx.quadraticCurveTo(-7, -8, 0, -8);
        ctx.quadraticCurveTo(7, -8, 7, -5);
        ctx.lineTo(7, 0);
        ctx.lineTo(0, 8);
        ctx.fill();
    },
    onCollect: function(bird, config) {
        bird.activateShield();
    }
});
