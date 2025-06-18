
for (let i = 0; i < 24; i++) {
  let h = i;
  let converted = h % 12 || 12;
  console.log(`${h} → ${converted}`);
}
