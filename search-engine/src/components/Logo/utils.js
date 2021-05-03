let leon, canvas, ctx, container;

const sw = 500;
const sh = 340;
const pixelRatio = 2;

function init() {
  container = document.getElementById("logo-coantainer");
  canvas = document.createElement("canvas");
  container.appendChild(canvas);
  ctx = canvas.getContext("2d");

  canvas.width = sw * pixelRatio;
  canvas.height = sh * pixelRatio;
  canvas.style.width = sw + "px";
  canvas.style.height = sh + "px";
  ctx.scale(pixelRatio, pixelRatio);
  ctx.lineCap = "round";
  leon = new LeonSans({
    text: "Search Engine",
    color: ["#000000"],
    size: 80,
    weight: 400,
  });
  requestAnimationFrame(animate);
}

function animate(t) {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, sw, sh);

  const x = (sw - leon.rect.w) / 2;
  const y = (sh - leon.rect.h) / 2;
  leon.position(x, y);
  leon.drawColorful(ctx);
}

window.onload = () => {
  init();
  let i,
    total = leon.drawing.length;
  for (i = 0; i < total; i++) {
    TweenMax.killTweensOf(leon.drawing[i]);
    TweenMax.fromTo(
      leon.drawing[i],
      1.4,
      {
        value: 0,
      },
      {
        value: 1,
        ease: Cubic.easeOut,
      }
    );
  }
};
