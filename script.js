    m = Matter.Mouse,
    h = Matter.Composite,
    y = (Matter.Vertices, Matter.Bodies),
    M = Matter.Body,
    v = (Matter.Events, Matter.Query, Matter.Svg),
    g = [
      "pink",
      "deeppink",
      "deeppink",
      "hotpink",
      "hotpink",
      "lightpink",
      "magenta",
      "orchid"
    ],
    S = ["mediumvioletred", "crimson", "salmon"];
  (window.onload = () => {
    t();
  }),
    setTimeout(function () {
      let t = 0,
        n = setInterval(() => {
          !(function () {
            let t = f.choose(g);
            const n = y.circle(o, a, 25, {
              restitution: 0,
              friction: 0,
              frictionStatic: 0,
              frictionAir: 0,
              mass: 10,
              render: {
                fillStyle: t,
                strokeStyle: t,
                lineWidth: 0
              }
            });
            M.setVelocity(n, {
              x: f.random(-1, 1),
              y: f.random(-1, 1)
            }),
              h.add(e, n);
          })(),
            60 == t && clearInterval(n),
            t++;
        }, 100);
    }, 2e3);
})();