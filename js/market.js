const marketPrices = {
  vegetables: [
    { name: 'Onion',       mandi: 'Nashik APMC',  state: 'maharashtra', modal: 2800, min: 2400, max: 3200, prev: 2435 },
    { name: 'Tomato',      mandi: 'Pune Market',  state: 'maharashtra', modal: 1800, min: 1400, max: 2200, prev: 2100 },
    { name: 'Potato',      mandi: 'Agra Mandi',   state: 'up',          modal: 1200, min: 1000, max: 1400, prev: 1200 },
    { name: 'Garlic',      mandi: 'Neemuch',      state: 'mp',          modal: 8500, min: 7500, max: 9500, prev: 8200 },
    { name: 'Ginger',      mandi: 'Nizamabad',    state: 'maharashtra', modal: 6200, min: 5500, max: 7000, prev: 6500 },
    { name: 'Green Chilli',mandi: 'Amravati',     state: 'maharashtra', modal: 4500, min: 3800, max: 5200, prev: 3900 },
    { name: 'Cauliflower', mandi: 'Jalandhar',    state: 'punjab',      modal: 800,  min: 600,  max: 1000, prev: 950  },
    { name: 'Cabbage',     mandi: 'Ludhiana',     state: 'punjab',      modal: 600,  min: 500,  max: 800,  prev: 600  },
  ],
  cereals: [
    { name: 'Wheat',       mandi: 'Khanna Mandi', state: 'punjab',      modal: 2275, min: 2100, max: 2450, prev: 2275 },
    { name: 'Rice (Paddy)',mandi: 'Karnal',        state: 'haryana',     modal: 2183, min: 2050, max: 2300, prev: 2183 },
    { name: 'Maize',       mandi: 'Gulbarga',     state: 'maharashtra', modal: 2090, min: 1950, max: 2200, prev: 2000 },
    { name: 'Soyabean',    mandi: 'Indore',        state: 'mp',          modal: 4600, min: 4400, max: 4900, prev: 4500 },
    { name: 'Gram',        mandi: 'Sehore',        state: 'mp',          modal: 5440, min: 5200, max: 5700, prev: 5440 },
    { name: 'Arhar (Tur)', mandi: 'Latur',         state: 'maharashtra', modal: 7000, min: 6600, max: 7500, prev: 6500 },
    { name: 'Moong',       mandi: 'Jaipur',        state: 'maharashtra', modal: 7755, min: 7500, max: 8100, prev: 7800 },
    { name: 'Urad',        mandi: 'Nagpur',        state: 'maharashtra', modal: 6950, min: 6600, max: 7200, prev: 6800 },
  ],
  oilseeds: [
    { name: 'Mustard',     mandi: 'Alwar',         state: 'maharashtra', modal: 5650,  min: 5400,  max: 5900,  prev: 5500  },
    { name: 'Groundnut',   mandi: 'Rajkot',        state: 'maharashtra', modal: 6377,  min: 6100,  max: 6700,  prev: 6200  },
    { name: 'Cotton',      mandi: 'Akola',          state: 'maharashtra', modal: 7020,  min: 6800,  max: 7500,  prev: 7100  },
    { name: 'Sunflower',   mandi: 'Kalaburagi',    state: 'maharashtra', modal: 5800,  min: 5500,  max: 6100,  prev: 5700  },
    { name: 'Turmeric',    mandi: 'Sangli',         state: 'maharashtra', modal: 14000, min: 12500, max: 15800, prev: 12000 },
    { name: 'Cumin',       mandi: 'Unjha',          state: 'maharashtra', modal: 22000, min: 20000, max: 24000, prev: 21000 },
    { name: 'Coriander',   mandi: 'Kota',           state: 'maharashtra', modal: 8500,  min: 7800,  max: 9200,  prev: 8700  },
    { name: 'Sesame',      mandi: 'Gondal',         state: 'maharashtra', modal: 18000, min: 16500, max: 19500, prev: 17500 },
  ]
};

function renderTable(tableId, data) {
  const table = document.getElementById(tableId);
  if (!data.length) {
    table.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:2rem;color:#4a5c3f;">No data available for this state.</td></tr>';
    return;
  }
  table.innerHTML = `
    <thead>
      <tr>
        <th>Commodity</th><th>Mandi</th>
        <th>Min (₹/qtl)</th><th>Modal (₹/qtl)</th>
        <th>Max (₹/qtl)</th><th>Change</th>
      </tr>
    </thead>
    <tbody>
      ${data.map(row => {
        const diff = row.modal - row.prev;
        const pct  = ((diff / row.prev) * 100).toFixed(1);
        const cls  = diff > 0 ? 'price-up trend-up' : diff < 0 ? 'price-down trend-down' : 'price-same';
        const sign = diff > 0 ? '+' : '';
        return `
          <tr>
            <td><strong>${row.name}</strong></td>
            <td style="color:#4a5c3f;font-size:0.82rem;">${row.mandi}</td>
            <td>₹${row.min.toLocaleString()}</td>
            <td><strong>₹${row.modal.toLocaleString()}</strong></td>
            <td>₹${row.max.toLocaleString()}</td>
            <td class="${cls}">${sign}${pct}%</td>
          </tr>`;
      }).join('')}
    </tbody>`;
}

function filterMarket(state) {
  const f = arr => state === 'all' ? arr : arr.filter(r => r.state === state);
  renderTable('vegetableTable', f(marketPrices.vegetables));
  renderTable('cerealTable',    f(marketPrices.cereals));
  renderTable('oilseedTable',   f(marketPrices.oilseeds));
}

function switchTab(name, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('marketStats').innerHTML = `
    <div class="mini-stat"><div class="ms-icon green">🌾</div><div><div class="ms-val">₹2,275</div><div class="ms-lbl">Wheat MSP (per qtl)</div></div></div>
    <div class="mini-stat"><div class="ms-icon gold">🧅</div><div><div class="ms-val">₹2,800</div><div class="ms-lbl">Onion Modal Price</div></div></div>
    <div class="mini-stat"><div class="ms-icon blue">🟡</div><div><div class="ms-val">₹14,000</div><div class="ms-lbl">Turmeric (Sangli)</div></div></div>
    <div class="mini-stat"><div class="ms-icon red">📊</div><div><div class="ms-val">500+</div><div class="ms-lbl">Mandis Tracked</div></div></div>
  `;
  renderTable('vegetableTable', marketPrices.vegetables);
  renderTable('cerealTable',    marketPrices.cereals);
  renderTable('oilseedTable',   marketPrices.oilseeds);
});
