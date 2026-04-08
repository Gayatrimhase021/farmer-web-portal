const crops = [
  { name: 'Wheat',        emoji: '🌾', season: 'rabi',   duration: '120 days',   water: 'Medium', soil: 'Loamy',        temp: '10–25°C', fertilizer: 'NPK 120:60:40',  msp: '₹2,275/qtl' },
  { name: 'Rice',         emoji: '🍚', season: 'kharif', duration: '150 days',   water: 'High',   soil: 'Clay',          temp: '22–35°C', fertilizer: 'NPK 100:50:50',  msp: '₹2,183/qtl' },
  { name: 'Maize',        emoji: '🌽', season: 'kharif', duration: '90 days',    water: 'Low',    soil: 'Sandy Loam',    temp: '18–32°C', fertilizer: 'NPK 150:75:75',  msp: '₹2,090/qtl' },
  { name: 'Cotton',       emoji: '🪻', season: 'kharif', duration: '170 days',   water: 'Medium', soil: 'Black Cotton',  temp: '25–35°C', fertilizer: 'NPK 80:40:80',   msp: '₹7,020/qtl' },
  { name: 'Soyabean',     emoji: '🫛', season: 'kharif', duration: '110 days',   water: 'Medium', soil: 'Black Loamy',   temp: '25–30°C', fertilizer: 'NPK 30:60:40',   msp: '₹4,600/qtl' },
  { name: 'Sugarcane',    emoji: '🎋', season: 'annual', duration: '12 months',  water: 'High',   soil: 'Loamy',         temp: '20–40°C', fertilizer: 'NPK 250:115:115', msp: '₹315/qtl' },
  { name: 'Onion',        emoji: '🧅', season: 'rabi',   duration: '100 days',   water: 'Medium', soil: 'Sandy Loam',    temp: '13–24°C', fertilizer: 'NPK 100:50:50',  msp: 'Market price' },
  { name: 'Mustard',      emoji: '🌼', season: 'rabi',   duration: '110 days',   water: 'Low',    soil: 'Sandy Loam',    temp: '7–25°C',  fertilizer: 'NPK 80:40:40',   msp: '₹5,650/qtl' },
  { name: 'Gram/Chickpea',emoji: '🫘', season: 'rabi',   duration: '100 days',   water: 'Low',    soil: 'Loamy',         temp: '15–25°C', fertilizer: 'NPK 40:60:40',   msp: '₹5,440/qtl' },
  { name: 'Turmeric',     emoji: '🟡', season: 'kharif', duration: '240 days',   water: 'High',   soil: 'Red Loamy',     temp: '20–30°C', fertilizer: 'NPK 60:50:120',  msp: 'Market price' },
  { name: 'Groundnut',    emoji: '🥜', season: 'kharif', duration: '120 days',   water: 'Medium', soil: 'Sandy Loam',    temp: '25–30°C', fertilizer: 'NPK 20:60:40',   msp: '₹6,377/qtl' },
  { name: 'Potato',       emoji: '🥔', season: 'rabi',   duration: '90 days',    water: 'Medium', soil: 'Loamy',         temp: '15–25°C', fertilizer: 'NPK 120:80:120', msp: 'Market price' },
  { name: 'Bajra',        emoji: '🌿', season: 'kharif', duration: '80 days',    water: 'Low',    soil: 'Sandy',         temp: '27–35°C', fertilizer: 'NPK 80:40:40',   msp: '₹2,500/qtl' },
  { name: 'Arhar (Tur)',  emoji: '🫙', season: 'kharif', duration: '150 days',   water: 'Low',    soil: 'Sandy Loam',    temp: '18–30°C', fertilizer: 'NPK 20:60:40',   msp: '₹7,000/qtl' },
  { name: 'Jowar',        emoji: '🌱', season: 'kharif', duration: '110 days',   water: 'Low',    soil: 'Loamy',         temp: '25–35°C', fertilizer: 'NPK 80:40:40',   msp: '₹3,180/qtl' },
  { name: 'Barley',       emoji: '🍺', season: 'rabi',   duration: '100 days',   water: 'Low',    soil: 'Sandy Loam',    temp: '7–20°C',  fertilizer: 'NPK 60:30:20',   msp: '₹1,735/qtl' },
];

let activeCropFilter = 'all';

function renderCrops(data) {
  const grid = document.getElementById('cropsGrid');
  if (!data.length) {
    grid.innerHTML = '<p style="color:#4a5c3f;padding:2rem;">No crops found matching your search.</p>';
    return;
  }
  const bgMap = {
    kharif: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)',
    rabi:   'linear-gradient(135deg,#e3f2fd,#bbdefb)',
    annual: 'linear-gradient(135deg,#fff3e0,#ffe0b2)',
  };
  grid.innerHTML = data.map(c => `
    <div class="crop-card">
      <div class="crop-img" style="background:${bgMap[c.season]}">${c.emoji}</div>
      <div class="crop-body">
        <h3>${c.name}</h3>
        <div class="crop-tags">
          <span class="tag tag-${c.season}">${c.season.charAt(0).toUpperCase() + c.season.slice(1)}</span>
          <span class="tag tag-water">${c.water} Water</span>
        </div>
        <div class="crop-info">
          <div class="crop-info-item"><strong>${c.duration}</strong>Duration</div>
          <div class="crop-info-item"><strong>${c.temp}</strong>Temperature</div>
          <div class="crop-info-item"><strong>${c.soil}</strong>Soil Type</div>
          <div class="crop-info-item"><strong>${c.msp}</strong>MSP 2024-25</div>
        </div>
        <div class="crop-fertilizer"><strong>Fertilizer:</strong> ${c.fertilizer} kg/ha</div>
      </div>
    </div>
  `).join('');
}

function filterCrops(season, btn) {
  activeCropFilter = season;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const q = document.getElementById('cropSearch').value.toLowerCase();
  renderCrops(crops.filter(c =>
    (season === 'all' || c.season === season) && c.name.toLowerCase().includes(q)
  ));
}

function searchCrops() {
  const q = document.getElementById('cropSearch').value.toLowerCase();
  renderCrops(crops.filter(c =>
    (activeCropFilter === 'all' || c.season === activeCropFilter) && c.name.toLowerCase().includes(q)
  ));
}

renderCrops(crops);
