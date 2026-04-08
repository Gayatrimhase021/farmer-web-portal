const schemes = [
  {
    name: 'PM Kisan Samman Nidhi', icon: '💰', category: 'central',
    badge: 'badge-central', badgeLabel: 'Central Govt.',
    desc: 'Direct income support of ₹6,000 per year in three equal installments to all farmer families across India.',
    amount: '₹6,000/year',
    eligibility: ['Landholding farmer families','Valid Aadhaar card','Bank account linked with Aadhaar','Not in income tax bracket']
  },
  {
    name: 'PM Fasal Bima Yojana', icon: '🛡️', category: 'insurance',
    badge: 'badge-central', badgeLabel: 'Insurance Scheme',
    desc: 'Comprehensive crop insurance providing financial support to farmers suffering crop loss due to unforeseen events.',
    amount: '2% premium for Kharif crops',
    eligibility: ['Notified crop growers','1.5% premium for Rabi crops','Both loanee and non-loanee farmers']
  },
  {
    name: 'Kisan Credit Card (KCC)', icon: '💳', category: 'central',
    badge: 'badge-central', badgeLabel: 'Central Govt.',
    desc: 'Short-term credit for cultivation and farm expenses at subsidized interest rates of just 4%.',
    amount: 'Up to ₹3 Lakh at 4% interest',
    eligibility: ['All farmers including sharecroppers','Tenant farmers','Self Help Groups','Joint Liability Groups']
  },
  {
    name: 'PM Kisan Maan Dhan Yojana', icon: '👴', category: 'central',
    badge: 'badge-central', badgeLabel: 'Central Govt.',
    desc: 'Voluntary pension scheme for small and marginal farmers providing ₹3,000 monthly pension at age 60.',
    amount: '₹3,000/month pension',
    eligibility: ['Age between 18–40 years','Small and marginal farmers','Land up to 2 hectares','Monthly contribution: ₹55 to ₹200']
  },
  {
    name: 'Soil Health Card Scheme', icon: '🌱', category: 'central',
    badge: 'badge-central', badgeLabel: 'Central Govt.',
    desc: 'Provides soil health cards with recommendations on nutrients and fertilizers for individual farms.',
    amount: 'Free Soil Testing',
    eligibility: ['All farmers can apply','Visit nearest soil testing lab','Valid for 3 years','Recommendations for all crops']
  },
  {
    name: 'PM Krishi Sinchayee Yojana', icon: '💧', category: 'central',
    badge: 'badge-central', badgeLabel: 'Central Govt.',
    desc: '"Har Khet Ko Pani" — ensuring water access to every agricultural field through micro-irrigation.',
    amount: '55% subsidy on drip/sprinkler',
    eligibility: ['All farmers eligible','Small & marginal: extra 45% subsidy','Valid land documents required']
  },
  {
    name: 'Namo Shetkari Mahasanman (MH)', icon: '🌾', category: 'state',
    badge: 'badge-state', badgeLabel: 'Maharashtra State',
    desc: 'Maharashtra state scheme providing additional ₹6,000/year to farmers enrolled in PM Kisan.',
    amount: '₹6,000/year (additional)',
    eligibility: ['Enrolled in PM Kisan','Maharashtra resident farmer','Valid 7/12 extract','Aadhaar-linked bank account']
  },
  {
    name: 'Magel Tyala Shettale Yojana', icon: '🏊', category: 'state',
    badge: 'badge-state', badgeLabel: 'Maharashtra State',
    desc: 'Individual farm pond scheme providing subsidy for rainwater storage ponds on your farm.',
    amount: '₹50,000 to ₹75,000 subsidy',
    eligibility: ['Minimum 0.6 hectares land','Maharashtra resident','Apply via online portal','Agriculture dept. approval']
  },
  {
    name: 'eNAM – National Agriculture Market', icon: '📱', category: 'central',
    badge: 'badge-open', badgeLabel: 'Digital Platform',
    desc: 'Online trading portal for agricultural commodities enabling farmers to sell produce to buyers across India at transparent prices.',
    amount: 'Free Registration',
    eligibility: ['Any farmer can register','Mobile number & Aadhaar needed','FSSAI compliant produce','Access via eNAM app or website']
  },
];

function renderSchemes(data) {
  document.getElementById('schemesGrid').innerHTML = data.map(s => `
    <div class="scheme-card">
      <div class="scheme-header">
        <div class="scheme-icon">${s.icon}</div>
        <div class="scheme-title">
          <h3>${s.name}</h3>
          <span class="scheme-badge ${s.badge}">${s.badgeLabel}</span>
        </div>
      </div>
      <div class="scheme-body">
        <p>${s.desc}</p>
        <div class="scheme-amount">
          <span>💵</span>
          <div>
            <div class="amt">${s.amount}</div>
            <div class="amt-lbl">Benefit Amount</div>
          </div>
        </div>
        <ul class="eligibility-list">
          ${s.eligibility.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>
      <div class="scheme-footer">
        <button class="btn-apply" onclick="applyScheme('${s.name}')">Apply Now</button>
        <button class="btn-details" onclick="showToast('Redirecting to official portal...')">Know More</button>
      </div>
    </div>
  `).join('');
}

function filterSchemes(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSchemes(type === 'all' ? schemes : schemes.filter(s => s.category === type));
}

function applyScheme(name) {
  document.getElementById('applyTitle').textContent = `Apply for: ${name}`;
  openModal('apply');
}

function submitApplication() {
  closeModal('apply');
  showToast('✅ Application submitted! Track status in your dashboard.');
}

renderSchemes(schemes);
