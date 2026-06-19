const DAYS=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const MONTHS=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

function updateClock(){
  const wib=new Date(Date.now()+7*3600000);
  const h=String(wib.getUTCHours()).padStart(2,'0');
  const m=String(wib.getUTCMinutes()).padStart(2,'0');
  const s=String(wib.getUTCSeconds()).padStart(2,'0');
  document.getElementById('clockTime').textContent=h+':'+m+':'+s;
  document.getElementById('clockDate').textContent=DAYS[wib.getUTCDay()]+', '+wib.getUTCDate()+' '+MONTHS[wib.getUTCMonth()]+' '+wib.getUTCFullYear();
  const cp=document.getElementById('currentPeriod');
  const lr=document.getElementById('lastReport');
  if(cp) cp.textContent=MONTHS[wib.getUTCMonth()]+' '+wib.getUTCFullYear();
  if(lr) lr.textContent=wib.getUTCDate()+' '+MONTHS[wib.getUTCMonth()]+' '+wib.getUTCFullYear();
}
setInterval(updateClock,1000);updateClock();

const jplData=[
  {id:1,jpl:'JPL 1',km:'KM 0+450',jalan:'Jl. Sisingamangaraja',kewenangan:'Nasional',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'02 Mei 2025 08:30',updatedP:'02 Mei 2025 08:30',lebar:'6 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:2,jpl:'JPL 2',km:'KM 1+200',jalan:'Jl. Gatot Subroto',kewenangan:'Provinsi',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'01 Mei 2025 09:00',updatedP:'01 Mei 2025 09:00',lebar:'8 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:3,jpl:'JPL 3',km:'KM 2+100',jalan:'Jl. Adam Malik',kewenangan:'Kota',kondisi:'Sedang',ruangan:'Cukup',peralatan:'Perlu Periksa',updatedR:'28 Apr 2025 10:15',updatedP:'28 Apr 2025 10:15',lebar:'5 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:4,jpl:'JPL 4',km:'KM 3+050',jalan:'Jl. Perintis Kemerdekaan',kewenangan:'Nasional',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'30 Apr 2025 07:45',updatedP:'30 Apr 2025 07:45',lebar:'10 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:5,jpl:'JPL 5',km:'KM 4+300',jalan:'Jl. Krakatau',kewenangan:'Kota',kondisi:'Parah',ruangan:'Rusak',peralatan:'Rusak Berat',updatedR:'25 Apr 2025 14:00',updatedP:'25 Apr 2025 14:00',lebar:'4 m',tipe:'Tanpa Pintu',penjaga:'Tidak Ada'},
  {id:6,jpl:'JPL 6',km:'KM 5+150',jalan:'Jl. Yos Sudarso',kewenangan:'Nasional',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'03 Mei 2025 06:30',updatedP:'03 Mei 2025 06:30',lebar:'12 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:7,jpl:'JPL 7',km:'KM 6+400',jalan:'Jl. Sutomo',kewenangan:'Kota',kondisi:'Sedang',ruangan:'Cukup',peralatan:'Cukup',updatedR:'27 Apr 2025 11:00',updatedP:'27 Apr 2025 11:00',lebar:'6 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:8,jpl:'JPL 8',km:'KM 7+200',jalan:'Jl. Iskandar Muda',kewenangan:'Provinsi',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'02 Mei 2025 13:00',updatedP:'02 Mei 2025 13:00',lebar:'8 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:9,jpl:'JPL 9',km:'KM 8+050',jalan:'Jl. Brigjend Katamso',kewenangan:'Kota',kondisi:'Parah',ruangan:'Rusak Berat',peralatan:'Tidak Berfungsi',updatedR:'20 Apr 2025 09:30',updatedP:'20 Apr 2025 09:30',lebar:'5 m',tipe:'Tanpa Pintu',penjaga:'Tidak Ada'},
  {id:10,jpl:'JPL 10',km:'KM 9+100',jalan:'Jl. Dr. Mansur',kewenangan:'Kota',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'01 Mei 2025 10:00',updatedP:'01 Mei 2025 10:00',lebar:'7 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:11,jpl:'JPL 11',km:'KM 10+300',jalan:'Jl. Asrama',kewenangan:'Kota',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'29 Apr 2025 08:00',updatedP:'29 Apr 2025 08:00',lebar:'6 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:12,jpl:'JPL 12',km:'KM 11+050',jalan:'Jl. Perjuangan',kewenangan:'Kota',kondisi:'Sedang',ruangan:'Cukup',peralatan:'Perlu Periksa',updatedR:'26 Apr 2025 13:00',updatedP:'26 Apr 2025 13:00',lebar:'5 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:13,jpl:'JPL 13',km:'KM 12+200',jalan:'Jl. Kapten Muslim',kewenangan:'Kota',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'03 Mei 2025 07:00',updatedP:'03 Mei 2025 07:00',lebar:'9 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:14,jpl:'JPL 14',km:'KM 13+100',jalan:'Jl. Helvetia',kewenangan:'Kota',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'02 Mei 2025 15:00',updatedP:'02 Mei 2025 15:00',lebar:'7 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:15,jpl:'JPL 15',km:'KM 14+400',jalan:'Jl. Ring Road',kewenangan:'Nasional',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'01 Mei 2025 11:00',updatedP:'01 Mei 2025 11:00',lebar:'14 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:16,jpl:'JPL 16',km:'KM 15+200',jalan:'Jl. Industri',kewenangan:'Kota',kondisi:'Sedang',ruangan:'Cukup',peralatan:'Cukup',updatedR:'24 Apr 2025 10:30',updatedP:'24 Apr 2025 10:30',lebar:'6 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:17,jpl:'JPL 17',km:'KM 16+100',jalan:'Jl. Binjai',kewenangan:'Nasional',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'30 Apr 2025 09:00',updatedP:'30 Apr 2025 09:00',lebar:'10 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:18,jpl:'JPL 18',km:'KM 17+050',jalan:'Jl. Pancing',kewenangan:'Kota',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'29 Apr 2025 14:00',updatedP:'29 Apr 2025 14:00',lebar:'8 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:19,jpl:'JPL 19',km:'KM 18+200',jalan:'Jl. Amplas',kewenangan:'Kota',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'03 Mei 2025 08:30',updatedP:'03 Mei 2025 08:30',lebar:'6 m',tipe:'Berpintu',penjaga:'Ada'},
  {id:20,jpl:'JPL 20',km:'KM 19+300',jalan:'Jl. Tembung',kewenangan:'Kota',kondisi:'Baik',ruangan:'Baik',peralatan:'Baik',updatedR:'02 Mei 2025 16:00',updatedP:'02 Mei 2025 16:00',lebar:'7 m',tipe:'Berpintu',penjaga:'Ada'},
];

let kerusakanData=[
  {jpl:'JPL 9',km:'KM 8+050',jenis:'Motor palang terbakar dan rel penggerak putus',severity:'parah',dampak:'tidak',ket:'Butuh penggantian segera',tgl:'20 Apr 2025',selesai:false},
  {jpl:'JPL 5',km:'KM 4+300',jenis:'Kabel listrik terputus dan panel kontrol rusak',severity:'parah',dampak:'tidak',ket:'Sistem otomatis mati total',tgl:'25 Apr 2025',selesai:false},
  {jpl:'JPL 3',km:'KM 2+100',jenis:'Engsel palang longgar dan cat terkelupas',severity:'sedang',dampak:'berfungsi',ket:'Palang masih bisa operasi',tgl:'28 Apr 2025',selesai:false},
  {jpl:'JPL 7',km:'KM 6+400',jenis:'Lampu peringatan mati sebagian',severity:'sedang',dampak:'berfungsi',ket:'3 dari 6 lampu LED mati',tgl:'27 Apr 2025',selesai:false},
  {jpl:'JPL 12',km:'KM 11+050',jenis:'Pelumas palang habis',severity:'ringan',dampak:'berfungsi',ket:'Perlu pelumasan rutin',tgl:'26 Apr 2025',selesai:false},
  {jpl:'JPL 16',km:'KM 15+200',jenis:'Cat box panel memudar',severity:'ringan',dampak:'berfungsi',ket:'Perlu pengecatan ulang',tgl:'24 Apr 2025',selesai:false},
];

function kClass(k){return k==='Baik'?'badge-good':k==='Parah'||k==='Rusak Berat'||k==='Tidak Berfungsi'||k==='Rusak'?'badge-bad':'badge-warn'}
function kLabel(k){return k==='Baik'?'Baik':k==='Parah'||k==='Rusak Berat'||k==='Tidak Berfungsi'||k==='Rusak'?'Parah':'Sedang'}

function renderDashTable(){
  const t=document.getElementById('dashTable');
  t.innerHTML=`<thead><tr><th>JPL</th><th>KM</th><th>Nama Jalan</th><th>Kewenangan</th><th>Kondisi</th><th>Peralatan</th></tr></thead><tbody>`+
  jplData.slice(0,8).map(d=>`<tr onclick="openDetail(${d.id})">
    <td class="jpl-link">${d.jpl}</td><td>${d.km}</td><td>${d.jalan}</td><td>${d.kewenangan}</td>
    <td><span class="status-badge ${kClass(d.kondisi)}">${kLabel(d.kondisi)}</span></td>
    <td><span class="status-badge ${kClass(d.peralatan)}">${d.peralatan}</span></td>
  </tr>`).join('')+`</tbody>`;
}

function renderJplTable(){
  const t=document.getElementById('jplTable');
  t.innerHTML=`<thead><tr><th>JPL</th><th>KM</th><th>Nama Jalan</th><th>Kewenangan</th><th>Lebar</th><th>Tipe</th><th>Kondisi</th><th>Aksi</th></tr></thead><tbody>`+
  jplData.map(d=>`<tr>
    <td class="jpl-link">${d.jpl}</td><td>${d.km}</td><td>${d.jalan}</td><td>${d.kewenangan}</td>
    <td>${d.lebar}</td><td>${d.tipe}</td>
    <td><span class="status-badge ${kClass(d.kondisi)}">${kLabel(d.kondisi)}</span></td>
    <td><button class="update-btn" onclick="openDetail(${d.id})"><i class="ti ti-eye" aria-hidden="true"></i> Detail</button></td>
  </tr>`).join('')+`</tbody>`;
}

function renderJplMarkers(){
  const m=document.getElementById('jplMarkers');
  const g=document.getElementById('jplQuickGrid');
  if(!m||!g) return;
  const cmap={'Baik':'good','Sedang':'warn','Cukup':'warn','Perlu Periksa':'warn','Parah':'bad','Rusak':'bad','Rusak Berat':'bad','Tidak Berfungsi':'bad'};
  m.innerHTML=jplData.map(d=>{
    const c=cmap[d.kondisi]||'good';
    return `<div class="jpl-pin ${c}" onclick="openDetail(${d.id})" title="${d.jpl}"><div class="jpl-dot"></div>${d.id}</div>`;
  }).join('');
  g.innerHTML=jplData.map(d=>{
    const c=cmap[d.kondisi]||'good';
    const bg=c==='good'?'#dcfce7':c==='warn'?'#fef3c7':'#fee2e2';
    const bdr=c==='good'?'#16a34a':c==='warn'?'#d97706':'#dc2626';
    const col=c==='good'?'#15803d':c==='warn'?'#b45309':'#b91c1c';
    const lbl=c==='good'?'Baik':c==='warn'?'Sedang':'Parah';
    return `<div onclick="openDetail(${d.id})" style="background:${bg};border:1.5px solid ${bdr};border-radius:7px;padding:5px 2px;text-align:center;cursor:pointer;transition:all .15s" title="${d.jpl}">
      <div style="font-size:11px;font-weight:700;color:${col}">${d.id}</div>
      <div style="font-size:8px;color:${col};margin-top:1px">${lbl}</div>
    </div>`;
  }).join('');
}

let currentDetailId=1,prevPage='dashboard';

function openDetail(id){
  prevPage=document.querySelector('.nav-btn.active')?.id?.replace('nav-','')||'dashboard';
  currentDetailId=id;
  const d=jplData.find(x=>x.id===id);
  document.getElementById('detailBreadcrumb').textContent=d.jpl;
  document.getElementById('detailTitle').textContent=d.jpl+' — '+d.jalan;
  document.getElementById('detailInfo').innerHTML=[{k:'KM Lokasi',v:d.km},{k:'Nama Jalan',v:d.jalan},{k:'Kewenangan',v:d.kewenangan},{k:'Lebar Jalan',v:d.lebar}]
    .map(r=>`<div class="info-row"><span class="info-key">${r.k}</span><span class="info-val">${r.v}</span></div>`).join('');
  document.getElementById('detailTeknis').innerHTML=[{k:'Tipe Perlintasan',v:d.tipe},{k:'Penjaga',v:d.penjaga},{k:'Kondisi Umum',v:d.kondisi},{k:'Status Peralatan',v:d.peralatan}]
    .map(r=>`<div class="info-row"><span class="info-key">${r.k}</span><span class="info-val"><span class="status-badge ${kClass(r.v)}">${r.v}</span></span></div>`).join('');
  const labels=['Tampak Depan','Tampak Belakang','Ruangan Operasi','Peralatan','Foto Tambahan 1','Foto Tambahan 2'];
  document.getElementById('photoGrid').innerHTML=labels.map((lbl,i)=>`
    <div class="photo-card"><i class="ti ti-camera" aria-hidden="true"></i><div class="photo-label">${lbl}</div>
    <input type="file" accept="image/*" onchange="loadPhoto(this,${i})" title="${lbl}"></div>`).join('');
  document.getElementById('kondisiRuangan').textContent=d.ruangan;
  document.getElementById('updatedRuangan').textContent='Terakhir update: '+d.updatedR;
  document.getElementById('kondisiPeralatan').textContent=d.peralatan;
  document.getElementById('updatedPeralatan').textContent='Terakhir update: '+d.updatedP;
  showPage('detail');
}

function goBack(){showPage(prevPage)}

function loadPhoto(input,idx){
  if(!input.files[0]) return;
  const reader=new FileReader();
  reader.onload=e=>{
    const card=input.parentElement;
    card.innerHTML=`<img src="${e.target.result}" alt="Foto ${idx+1}"><input type="file" accept="image/*" onchange="loadPhoto(this,${idx})" title="Ganti foto">`;
    showToast('Foto berhasil diupload!');
  };
  reader.readAsDataURL(input.files[0]);
}

function updateKondisi(type){
  const opts=type==='ruangan'?['Baik','Cukup','Rusak','Rusak Berat']:['Baik','Perlu Periksa','Cukup','Rusak Berat','Tidak Berfungsi'];
  const cur=type==='ruangan'?document.getElementById('kondisiRuangan').textContent:document.getElementById('kondisiPeralatan').textContent;
  const val=prompt('Update kondisi '+type+'\nOpsi: '+opts.join(' | '),cur);
  if(!val) return;
  const d=jplData.find(x=>x.id===currentDetailId);
  const wib=new Date(Date.now()+7*3600000);
  const ts=wib.getUTCDate()+' '+MONTHS[wib.getUTCMonth()]+' '+wib.getUTCFullYear()+' '+String(wib.getUTCHours()).padStart(2,'0')+':'+String(wib.getUTCMinutes()).padStart(2,'0');
  if(type==='ruangan'){d.ruangan=val;d.updatedR=ts;document.getElementById('kondisiRuangan').textContent=val;document.getElementById('updatedRuangan').textContent='Terakhir update: '+ts}
  else{d.peralatan=val;d.updatedP=ts;document.getElementById('kondisiPeralatan').textContent=val;document.getElementById('updatedPeralatan').textContent='Terakhir update: '+ts}
  recalcAll();
  saveToBridge();
  showToast('Kondisi '+type+' diperbarui — semua menu diperbarui!');
}

function saveKerusakan(){
  const jenis=document.getElementById('fJenis').value.trim();
  if(!jenis){alert('Isi jenis kerusakan terlebih dahulu!');return}
  const d=jplData.find(x=>x.id===currentDetailId);
  const sev=document.getElementById('fSeverity').value;
  const dampak=document.querySelector('input[name=dampak]:checked').value;
  const ket=document.getElementById('fKeterangan').value;
  const wib=new Date(Date.now()+7*3600000);
  const tgl=wib.getUTCDate()+' '+MONTHS[wib.getUTCMonth()]+' '+wib.getUTCFullYear();
  kerusakanData.unshift({jpl:d.jpl,km:d.km,jenis,severity:sev,dampak,ket,tgl,selesai:false});
  document.getElementById('fJenis').value='';document.getElementById('fKeterangan').value='';
  // ← Reaktif: update semua menu
  recalcAll();
  showToast('✅ Kerusakan disimpan — semua menu diperbarui!');
}

// ═══════════════════════════════════════════════════════════
// RECALC ENGINE — dipanggil setiap kali kerusakanData berubah
// Update: kondisi jplData → Stats Cards → Donut → Peta → Tabel
// ═══════════════════════════════════════════════════════════
function recalcAll() {

  // 1. SINKRONISASI kondisi jplData dari kerusakanData terbaru
  //    Aturan: ambil kerusakan terparah per JPL
  const sevRank = {parah:3, sedang:2, ringan:1};
  const kondisiMap = {3:'Parah', 2:'Sedang', 1:'Baik'};
  const peralatanMap = {
    parah: {tidak:'Tidak Berfungsi', berfungsi:'Rusak Berat'},
    sedang:{tidak:'Perlu Periksa',   berfungsi:'Cukup'},
    ringan:{tidak:'Perlu Periksa',   berfungsi:'Baik'}
  };

  // Reset SEMUA JPL ke kondisi Baik dulu, lalu naikkan berdasarkan kerusakan aktif
  jplData.forEach(d => {
    d.kondisi   = 'Baik';
    d.peralatan = 'Baik';
    d.ruangan   = 'Baik';
  });

  jplData.forEach(d => {
    // Cari kerusakan aktif (belum selesai) untuk JPL ini
    const kerJPL = kerusakanData.filter(k => k.jpl === d.jpl && !k.selesai);
    if (kerJPL.length === 0) return;

    const worst = kerJPL.reduce((acc, k) => {
      return (sevRank[k.severity]||0) > (sevRank[acc.severity]||0) ? k : acc;
    }, kerJPL[0]);

    // Update kondisi dan peralatan berdasarkan kerusakan terparah
    const rankVal = sevRank[worst.severity] || 1;
    d.kondisi = kondisiMap[rankVal] || 'Baik';

    if (worst.severity === 'parah') {
      d.peralatan = peralatanMap.parah[worst.dampak] || d.peralatan;
      d.ruangan   = worst.dampak === 'tidak' ? 'Rusak Berat' : d.ruangan;
    } else if (worst.severity === 'sedang') {
      d.peralatan = peralatanMap.sedang[worst.dampak] || d.peralatan;
    } else {
      d.peralatan = peralatanMap.ringan[worst.dampak] || d.peralatan;
    }
  });

  // 2. HITUNG statistik dari jplData
  const cmap = {'Baik':'good','Sedang':'warn','Cukup':'warn','Perlu Periksa':'warn','Parah':'bad','Rusak':'bad','Rusak Berat':'bad','Tidak Berfungsi':'bad'};
  let nBaik=0, nSedang=0, nParah=0;
  jplData.forEach(d => {
    const c = cmap[d.kondisi]||'good';
    if(c==='good') nBaik++;
    else if(c==='warn') nSedang++;
    else nParah++;
  });
  const total = jplData.length;

  // 3. UPDATE Stats Cards
  const elBaik   = document.getElementById('sc-baik');
  const elSedang  = document.getElementById('sc-sedang');
  const elParah   = document.getElementById('sc-parah');
  const elTotal   = document.getElementById('sc-total');
  if(elBaik)   animateCount(elBaik,   parseInt(elBaik.textContent)||0,   nBaik);
  if(elSedang) animateCount(elSedang, parseInt(elSedang.textContent)||0, nSedang);
  if(elParah)  animateCount(elParah,  parseInt(elParah.textContent)||0,  nParah);
  if(elTotal)  elTotal.textContent = total;

  // 4. UPDATE Donut Chart
  // SVG circumference = 2πr = 2×π×50 ≈ 314.16
  const C = 314.16;
  const pctBaik   = nBaik   / total;
  const pctSedang = nSedang / total;
  const pctParah  = nParah  / total;
  // stroke-dashoffset: sisa keliling yang TIDAK digambar
  // kita tumpuk 3 lingkaran: baik → sedang → parah
  const dB = document.getElementById('donut-baik');
  const dS = document.getElementById('donut-sedang');
  const dP = document.getElementById('donut-parah');
  const dPct = document.getElementById('donut-pct');
  if(dB) dB.style.strokeDashoffset = C * (1 - pctBaik);
  if(dS) {
    // sedang dimulai setelah porsi baik
    dS.style.strokeDashoffset = C * (1 - pctSedang);
    dS.style.transform = `rotate(${pctBaik * 360}deg)`;
    dS.style.transformOrigin = '65px 65px';
  }
  if(dP) {
    dP.style.strokeDashoffset = C * (1 - pctParah);
    dP.style.transform = `rotate(${(pctBaik + pctSedang) * 360}deg)`;
    dP.style.transformOrigin = '65px 65px';
  }
  if(dPct) dPct.textContent = Math.round(pctBaik * 100) + '%';

  // 5. UPDATE Legend donut
  const lB = document.getElementById('leg-baik');
  const lS = document.getElementById('leg-sedang');
  const lP = document.getElementById('leg-parah');
  if(lB) lB.textContent = nBaik;
  if(lS) lS.textContent = nSedang;
  if(lP) lP.textContent = nParah;

  // 6. RE-RENDER semua tabel & peta
  renderDashTable();
  renderJplMarkers();
  renderKerusakanList();

  // Jika halaman perlintasan aktif, render juga
  if(document.getElementById('page-perlintasan')?.classList.contains('active')) {
    renderJplTable();
  }

  // Jika sedang di halaman detail, refresh detail juga
  if(document.getElementById('page-detail')?.classList.contains('active')) {
    openDetail(currentDetailId);
  }

  // ← Simpan state terbaru ke localStorage agar Editor bisa baca
  saveToBridge();
}

// ═══════════════════════════════════════════════════════
// BRIDGE — simpan state dashboard ke localStorage
// Editor akan poll ini setiap 2 detik
// ═══════════════════════════════════════════════════════
function saveToBridge() {
  try {
    localStorage.setItem('btp_live_state', JSON.stringify({
      jplData:       jplData,
      kerusakanData: kerusakanData,
      ts:            Date.now()
    }));
  } catch(e) {}
}

// Animasi angka naik/turun
function animateCount(el, from, to) {
  if(from === to) return;
  const steps = 20;
  const diff  = to - from;
  let step    = 0;
  const timer = setInterval(() => {
    step++;
    el.textContent = Math.round(from + diff * (step / steps));
    if(step >= steps) { el.textContent = to; clearInterval(timer); }
  }, 20);
}

/* ── MODAL PERBAIKAN ─────────────────────────────────── */
let _resolveIdx = -1;
let _resolvePhotos = [];

function bukaModalPerbaikan(idx) {
  _resolveIdx = idx;
  _resolvePhotos = [];
  const k = kerusakanData[idx];
  document.getElementById('modalKerInfo').innerHTML =
    '<b>'+k.jpl+'</b> &bull; '+k.km+'<br><span style="color:var(--muted);font-size:11px">'+k.jenis+'</span>';
  document.getElementById('modalCatatan').value = '';
  document.getElementById('modalFotoPreview').innerHTML =
    '<div style="color:var(--muted);font-size:11px;text-align:center;padding:12px 0"><i class="ti ti-photo-off" style="font-size:24px;display:block;margin-bottom:4px"></i>Belum ada foto</div>';
  document.getElementById('modalOverlay').style.display = 'flex';
}

function tutupModal() {
  document.getElementById('modalOverlay').style.display = 'none';
  _resolveIdx = -1;
  _resolvePhotos = [];
}

function modalTambahFoto(input) {
  const files = Array.from(input.files);
  if (!files.length) return;
  files.forEach(function(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      _resolvePhotos.push(e.target.result);
      renderModalFotoPreview();
    };
    reader.readAsDataURL(file);
  });
  input.value = '';
}

function hapusFotoBukti(i) {
  _resolvePhotos.splice(i, 1);
  renderModalFotoPreview();
}

function renderModalFotoPreview() {
  var wrap = document.getElementById('modalFotoPreview');
  if (_resolvePhotos.length === 0) {
    wrap.innerHTML = '<div style="color:var(--muted);font-size:11px;text-align:center;padding:12px 0"><i class="ti ti-photo-off" style="font-size:24px;display:block;margin-bottom:4px"></i>Belum ada foto</div>';
    return;
  }
  wrap.innerHTML = _resolvePhotos.map(function(src,i){
    return '<div style="position:relative;display:inline-block;margin:4px"><img src="'+src+'" style="width:80px;height:60px;object-fit:cover;border-radius:6px;border:2px solid var(--green)"><button onclick="hapusFotoBukti('+i+')" style="position:absolute;top:-5px;right:-5px;width:18px;height:18px;background:#dc2626;border:none;border-radius:50%;color:#fff;font-size:10px;cursor:pointer;line-height:18px;text-align:center;padding:0">\u2715</button></div>';
  }).join('');
}

function konfirmasiPerbaikan() {
  if (_resolveIdx < 0) return;
  var catatan = document.getElementById('modalCatatan').value.trim();
  var k = kerusakanData[_resolveIdx];
  var wib = new Date(Date.now()+7*3600000);
  k.selesai = true;
  k.tglSelesai = wib.getUTCDate()+' '+MONTHS[wib.getUTCMonth()]+' '+wib.getUTCFullYear();
  k.catatanPerbaikan = catatan || '—';
  k.fotoBukti = _resolvePhotos.slice();

  // Langsung reset kondisi JPL ke Baik jika tidak ada kerusakan aktif lain
  var jplObj = jplData.find(function(d){ return d.jpl === k.jpl; });
  if (jplObj) {
    var masihAda = kerusakanData.some(function(x){ return x.jpl === k.jpl && !x.selesai; });
    if (!masihAda) {
      jplObj.kondisi   = 'Baik';
      jplObj.peralatan = 'Baik';
      jplObj.ruangan   = 'Baik';
    }
  }

  tutupModal();
  renderKerusakanList();
  renderDashTable();
  renderJplMarkers();
  if(document.getElementById('page-perlintasan') && document.getElementById('page-perlintasan').classList.contains('active')) renderJplTable();
  saveToBridge();
  showToast('\u2705 Perbaikan dicatat \u2014 status '+k.jpl+' kembali ke Baik!');
}

function renderKerusakanList(){
  var order = {parah:0, sedang:1, ringan:2};
  var aktif   = kerusakanData.map(function(k,i){return Object.assign({},k,{_i:i});}).filter(function(k){return !k.selesai;}).sort(function(a,b){return order[a.severity]-order[b.severity];});
  var selesai = kerusakanData.map(function(k,i){return Object.assign({},k,{_i:i});}).filter(function(k){return k.selesai;});
  var all = aktif.concat(selesai);

  if (all.length === 0) {
    document.getElementById('kerusakanList').innerHTML =
      '<div style="text-align:center;padding:40px;color:var(--muted)"><i class="ti ti-circle-check" style="font-size:40px;color:var(--green);display:block;margin-bottom:8px"></i>Tidak ada kerusakan tercatat</div>';
    return;
  }

  document.getElementById('kerusakanList').innerHTML = all.map(function(k){
    var done = !!k.selesai;
    var fotoHtml = '';
    if (done && k.fotoBukti && k.fotoBukti.length) {
      fotoHtml = '<div style="margin-top:4px">'+k.fotoBukti.map(function(src){return '<img src="'+src+'" style="width:48px;height:36px;object-fit:cover;border-radius:4px;margin-right:4px;border:1px solid #16a34a">';}).join('')+'</div>';
    }
    var selesaiBox = done ? '<div style="margin-top:6px;padding:6px 10px;background:#dcfce7;border-radius:6px;font-size:10px;color:#15803d"><b>\u2714 SELESAI DIPERBAIKI</b> \u2014 '+(k.tglSelesai||'')+(k.catatanPerbaikan && k.catatanPerbaikan!=='\u2014' ? '<br>\uD83D\uDCDD '+k.catatanPerbaikan : '')+fotoHtml+'</div>' : '';
    var tombolPerbaiki = !done ? '<button onclick="bukaModalPerbaikan('+k._i+')" style="display:flex;align-items:center;gap:5px;padding:7px 12px;background:#16a34a;border:none;border-radius:7px;color:#fff;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap;box-shadow:0 2px 6px rgba(22,163,74,.3)"><i class="ti ti-tools"></i> Sudah Diperbaiki</button>' : '';
    return '<div class="kerusakan-item '+(done ? '' : k.severity)+'" style="'+(done ? 'border-left:5px solid #16a34a;background:linear-gradient(90deg,#f0fdf4,var(--surface));' : '')+'">'+
      '<span class="sev-badge sev-'+k.severity+'">'+k.severity.toUpperCase()+'</span>'+
      '<div class="kerusakan-info" style="flex:1">'+
        '<div class="ker-jpl">'+k.jpl+' &bull; '+k.km+'</div>'+
        '<div class="ker-desc">'+k.jenis+'</div>'+
        '<div class="ker-impact '+(k.dampak==='berfungsi'?'impact-berfungsi':'impact-tidak')+'">'+
          '<i class="ti ti-'+(k.dampak==='berfungsi'?'check':'x')+'"></i> '+
          (k.dampak==='berfungsi'?'Palang masih berfungsi':'Palang TIDAK berfungsi')+
        '</div>'+
        selesaiBox+
      '</div>'+
      '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0">'+
        '<div class="ker-date">'+k.tgl+'</div>'+
        tombolPerbaiki+
      '</div>'+
    '</div>';
  }).join('');
}

function connectSpreadsheet(){
  const url=document.getElementById('ssUrl').value.trim();
  if(!url){alert('Masukkan URL spreadsheet!');return}
  if(!url.includes('docs.google.com')){alert('URL tidak valid! Gunakan URL Google Spreadsheet.');return}
  document.getElementById('ssDot').style.background='#f59e0b';
  document.getElementById('ssStatusText').textContent='Menghubungkan...';
  setTimeout(()=>{
    document.getElementById('ssDot').style.background='#22c55e';
    document.getElementById('ssStatusText').textContent='Terhubung: '+url.substring(0,55)+'...';
    document.getElementById('connDot').className='conn-dot connected';
    document.getElementById('connLabel').textContent='TERHUBUNG';
    document.getElementById('connStatus').textContent='Spreadsheet aktif';
    showToast('Spreadsheet berhasil terhubung!');
  },1500);
}

function testConn(){
  const url=document.getElementById('ssUrl').value.trim();
  if(!url){document.getElementById('ssStatusText').textContent='Masukkan URL terlebih dahulu';return}
  document.getElementById('ssDot').style.background='#f59e0b';
  document.getElementById('ssStatusText').textContent='Testing koneksi...';
  setTimeout(()=>{
    const ok=url.includes('google');
    document.getElementById('ssDot').style.background=ok?'#22c55e':'#ef4444';
    document.getElementById('ssStatusText').textContent=ok?'Koneksi berhasil — URL valid':'Koneksi gagal — periksa URL';
  },1000);
}

function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  const nb=document.getElementById('nav-'+name);
  if(nb) nb.classList.add('active');
  if(name==='perlintasan') renderJplTable();
  if(name==='kerusakan') renderKerusakanList();
  if(name==='dashboard'){renderDashTable();renderJplMarkers();}
}

function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2800);
}

renderDashTable();renderJplMarkers();

// Inisialisasi reaktif — hitung dari kerusakanData awal
setTimeout(()=>{ recalcAll(); saveToBridge(); }, 100);

// ═══════════════════════════════════════
// LIVE SYNC — Baca data dari Editor
// ═══════════════════════════════════════
let _lastSyncTs = 0;
const statIconMap = {good:'ti-check',warn:'ti-alert-circle',bad:'ti-x',info:'ti-road'};

function applyEditorData(payload) {
  // 1. Header teks
  const h1el = document.getElementById('dashH1');
  const subEl = document.getElementById('dashSub');
  const tzEl  = document.getElementById('clockTz');
  const clEl  = document.getElementById('connLabel');
  const csEl  = document.getElementById('connStatus');
  if(h1el) h1el.textContent = payload.h1 || h1el.textContent;
  if(subEl) subEl.textContent = payload.sub || subEl.textContent;
  if(tzEl)  tzEl.textContent  = payload.tz  || tzEl.textContent;
  if(clEl)  clEl.textContent  = payload.connLabel || clEl.textContent;
  if(csEl)  csEl.textContent  = payload.connOff   || csEl.textContent;

  // 2. CSS Warna
  if(payload.colors) {
    Object.entries(payload.colors).forEach(([k,v])=>{
      document.documentElement.style.setProperty(k, v);
    });
  }

  // 3. Data JPL — replace array in-place
  if(payload.jplData && payload.jplData.length) {
    jplData.length = 0;
    payload.jplData.forEach(d => jplData.push(d));
  }

  // 4. Data Kerusakan
  if(payload.kerusakanData) {
    kerusakanData.length = 0;
    payload.kerusakanData.forEach(d => kerusakanData.push(d));
  }

  // 5. Stat cards — SKIP override dari editor, biarkan recalcAll yang hitung
  // (editor mungkin punya nilai berbeda; kita trust data jplData + kerusakanData)

  // 6. Nav items
  if(payload.navItems && payload.navItems.length) {
    const nb = document.getElementById('navBar');
    if(nb) {
      const cur = document.querySelector('.nav-btn.active')?.id?.replace('nav-','') || 'dashboard';
      nb.innerHTML = payload.navItems.map((n,i)=>`
        <button class="nav-btn ${n.id===cur?'active':''}" id="nav-${n.id}" onclick="showPage('${n.id}')">
          <i class="ti ${n.icon}" aria-hidden="true"></i> ${n.label}
        </button>`).join('');
    }
  }

  // 7. Jalankan recalcAll agar stats, donut, peta, tabel semua ikut update
  recalcAll();

  // 8. Update sync badge
  const dot  = document.getElementById('editor-sync-dot');
  const text = document.getElementById('editor-sync-text');
  const wib  = new Date(Date.now()+7*3600000);
  const ts   = String(wib.getUTCHours()).padStart(2,'0')+':'+String(wib.getUTCMinutes()).padStart(2,'0')+':'+String(wib.getUTCSeconds()).padStart(2,'0');
  if(dot)  dot.style.background  = '#22c55e';
  if(text) text.textContent = 'Sinkron dari Editor ' + ts;
}

function pollEditorSync() {
  try {
    const raw = localStorage.getItem('btp_dashboard_data');
    if(!raw) return;
    const payload = JSON.parse(raw);
    if(payload.ts && payload.ts !== _lastSyncTs) {
      _lastSyncTs = payload.ts;
      applyEditorData(payload);
    }
  } catch(e) { /* silent */ }
}

// Cek setiap 2 detik — dashboard akan auto-update saat ada perubahan dari editor
setInterval(pollEditorSync, 2000);
// Cek langsung saat pertama dibuka
pollEditorSync();