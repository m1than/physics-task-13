function calculateMotion() {
  const x0 = parseFloat(document.getElementById('initialX').value);
  const y0 = parseFloat(document.getElementById('initialY').value);
  const v0 = parseFloat(document.getElementById('initialV').value);
  const phi0 = parseFloat(document.getElementById('initialPhi').value) * Math.PI / 180;
  const forceLaw = document.getElementById('forceLaw').value;
  const forceAngle = parseFloat(document.getElementById('forceAngle').value) * Math.PI / 180;
  const endTime = parseFloat(document.getElementById('endTime').value);

  let x = x0;
  let y = y0;
  let vx = v0 * Math.cos(phi0);
  let vy = v0 * Math.sin(phi0);
  let t = 0;
  let output = `t: 0, x: 0, y: 0, v: 0, F: 0<br>`;

  while (t <= endTime) {
    const scope = { x, y, vx, vy, t };
    const F = math.evaluate(forceLaw, scope);
    const ax = F * Math.cos(forceAngle);
    const ay = F * Math.sin(forceAngle);

    vx += ax;
    vy += ay;
    x += vx;
    y += vy;
    t += 1;

    const currentPhi = Math.atan2(vy, vx);
    output += `t: ${t}, x: ${x.toFixed(2)}, y: ${y.toFixed(2)}, v: ${(Math.sqrt(vx ^ 2 + vy ^ 2).toFixed(2))}, F: ${F.toFixed(2)}, φ: ${(currentPhi * 180 / Math.PI).toFixed(2)}<br>`;
  }

  document.getElementById('output').innerHTML = output;
}
