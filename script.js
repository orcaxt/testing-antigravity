/**
 * WARUNG NASI PADANG SABANA RANCAK
 * Interaktivitas & Animasi Kursor Padang
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ===================================================================
     1. ANIMASI CUSTOM CURSOR MINANG & EFEK PERCIKAN REMPAH
     =================================================================== */
  const customCursor = document.getElementById('customCursor');
  const cursorFollower = document.getElementById('cursorFollower');
  const trailContainer = document.getElementById('trailContainer');

  let mouseX = -100;
  let mouseY = -100;
  let followerX = -100;
  let followerY = -100;
  let isMoving = false;
  let lastParticleTime = 0;

  // Track mouse coordinates
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (customCursor) {
      customCursor.style.left = `${mouseX}px`;
      customCursor.style.top = `${mouseY}px`;
    }

    // Buat percikan rempah/cahaya saat kursor bergerak (dibatasi interval)
    const now = Date.now();
    if (now - lastParticleTime > 45 && trailContainer) {
      createEmberParticle(mouseX, mouseY, false);
      lastParticleTime = now;
    }
  });

  // Smooth lerp follow loop for outer circle ring
  function animateFollower() {
    const ease = 0.18; // smooth lerp factor
    followerX += (mouseX - followerX) * ease;
    followerY += (mouseY - followerY) * ease;

    if (cursorFollower) {
      cursorFollower.style.left = `${followerX}px`;
      cursorFollower.style.top = `${followerY}px`;
    }

    requestAnimationFrame(animateFollower);
  }
  requestAnimationFrame(animateFollower);

  // Efek klik: Ledakan bumbu cabai / rempah keemasan
  window.addEventListener('mousedown', (e) => {
    document.body.classList.add('cursor-click');
    // Munculkan 6-8 partikel rempah meledak dari titik klik
    for (let i = 0; i < 8; i++) {
      createEmberParticle(e.clientX, e.clientY, true);
    }
  });

  window.addEventListener('mouseup', () => {
    document.body.classList.remove('cursor-click');
  });

  // Deteksi elemen interaktif untuk memperbesar kursor
  const interactiveElements = document.querySelectorAll(
    'a, button, input, select, textarea, [data-hover], .menu-card, .filosofi-card, .tradisi-card, .rempah-pill'
  );

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });

  // Sembunyikan kursor jika mouse keluar dari jendela browser
  document.addEventListener('mouseleave', () => {
    if (customCursor) customCursor.style.opacity = '0';
    if (cursorFollower) cursorFollower.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    if (customCursor) customCursor.style.opacity = '1';
    if (cursorFollower) cursorFollower.style.opacity = '1';
  });

  // Fungsi pembuat partikel bumbu / rempah minang
  function createEmberParticle(x, y, isBurst = false) {
    if (!trailContainer) return;

    const particle = document.createElement('div');
    particle.className = 'cursor-particle';

    // Warna bumbu Padang: Emas Kunyit, Merah Cabai, Oranye Rendang
    const spiceColors = ['#D49B28', '#E63946', '#F3BC54', '#8C1D1D', '#E76F51'];
    const randomColor = spiceColors[Math.floor(Math.random() * spiceColors.length)];

    const size = isBurst ? Math.random() * 8 + 4 : Math.random() * 4 + 2;
    const distance = isBurst ? Math.random() * 60 + 20 : Math.random() * 20 + 5;
    const angle = Math.random() * Math.PI * 2;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = randomColor;
    particle.style.boxShadow = `0 0 8px ${randomColor}`;
    particle.style.setProperty('--dx', `${dx}px`);
    particle.style.setProperty('--dy', `${dy}px`);

    trailContainer.appendChild(particle);

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 750);
  }


  /* ===================================================================
     2. EKSPLORASI REMPAH INTERAKTIF
     =================================================================== */
  const rempahData = {
    lengkuas: {
      emoji: '🌿',
      latin: 'Alpinia galanga',
      tagline: 'Penjaga Keharuman Rendang',
      name: 'Lengkuas (Laos Merah Minang)',
      desc: 'Lengkuas diparut halus atau digeprek untuk melepaskan minyak atsiri yang khas. Bersama santan dan daging, lengkuas membentuk serundeng karamel bumbu rendang yang tahan hingga berbulan-bulan tanpa pengawet buatan.',
      aroma: '85%',
      pengawet: '95%',
      menu: 'Rendang Daging Sapi, Kalio Ayam, Gulai Tunjang'
    },
    cabai: {
      emoji: '🌶️',
      latin: 'Capsicum annuum',
      tagline: 'Jiwa & Kobaran Nafsu Makan',
      name: 'Cabai Merah & Hijau Keriting',
      desc: 'Ditanam di tanah vulkanik Bukit Barisan, menghasilkan rasa pedas renyah dengan aroma manis alami. Dalam budaya Minang, cabai melambangkan keberanian dan keterusterangan bersikap.',
      aroma: '90%',
      pengawet: '80%',
      menu: 'Dendeng Batokok Balado, Sambal Lado Ijo, Ayam Balado'
    },
    santan: {
      emoji: '🥥',
      latin: 'Cocos nucifera (Pati Santan)',
      tagline: 'Sumber Gurih & Kelembutan',
      name: 'Pati Santan Kelapa Tua Pilihan',
      desc: 'Dipetik dari kelapa tua segar, diperas tanpa tambahan air untuk kuah kental gulai. Saat dipanaskan berjam-jam, santan mengeluarkan minyak kelapa murni alami yang melapisi bumbu rendang.',
      aroma: '95%',
      pengawet: '90%',
      menu: 'Gulai Tunjang Kikil, Kalio Jariang, Rendang Basah'
    },
    serai: {
      emoji: '🌱',
      latin: 'Cymbopogon citratus',
      tagline: 'Pelepas Aroma Segar Menyegarkan',
      name: 'Serai Wangi Batang Putih',
      desc: 'Dimemarkan sebelum dimasukkan ke dalam kuali mendidih. Kandungan sitronelal memberi kesegaran aromatik citrus yang menyeimbangkan rasa pekat kuah santan bersantan banyak.',
      aroma: '92%',
      pengawet: '75%',
      menu: 'Ayam Pop Gurih, Gulai Kepala Kakap, Sayur Nangka Kapau'
    },
    asam: {
      emoji: '🍋',
      latin: 'Garcinia xanthochymus',
      tagline: 'Penyeimbang Rasa Gurih Asli Minang',
      name: 'Asam Kandis Kering',
      desc: 'Bukan cuka atau asam jawa, melainkan buah kandis hutan yang dikeringkan hingga hitam pekat. Memberi semburat rasa asam segar yang anggun dan mengunci kesegaran ikan atau daging.',
      aroma: '78%',
      pengawet: '88%',
      menu: 'Asam Padeh Tongkol, Gulai Ikan Mas, Kalio Daging'
    },
    kapulaga: {
      emoji: '✨',
      latin: 'Elettaria cardamomum & Syzygium',
      tagline: 'Sentuhan Kemewahan Rempah Timur',
      name: 'Kapulaga Jawa & Cengkeh Ranah',
      desc: 'Bumbu manis berempah yang mengingatkan pada jalur perdagangan sutra rempah kuno di pesisir barat Sumatra. Memberikan efek hangat di tenggorokan dan aroma royal nan mewah.',
      aroma: '98%',
      pengawet: '85%',
      menu: 'Gulai Cancang Daging, Soto Padang, Rendang Spesial Hari Raya'
    }
  };

  const rempahPills = document.querySelectorAll('.rempah-pill');
  const rempahDisplay = document.getElementById('rempahDisplay');
  const rempahEmoji = document.getElementById('rempahEmoji');
  const rempahLatin = document.getElementById('rempahLatin');
  const rempahTagline = document.getElementById('rempahTagline');
  const rempahName = document.getElementById('rempahName');
  const rempahDesc = document.getElementById('rempahDesc');
  const metricAroma = document.getElementById('metricAroma');
  const metricPengawet = document.getElementById('metricPengawet');
  const rempahMenu = document.getElementById('rempahMenu');

  rempahPills.forEach(pill => {
    pill.addEventListener('click', () => {
      rempahPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const key = pill.dataset.rempah;
      const data = rempahData[key];
      if (!data) return;

      // Animasi transisi halus
      if (rempahDisplay) {
        rempahDisplay.style.opacity = '0.4';
        rempahDisplay.style.transform = 'scale(0.98)';
      }

      setTimeout(() => {
        if (rempahEmoji) rempahEmoji.textContent = data.emoji;
        if (rempahLatin) rempahLatin.textContent = data.latin;
        if (rempahTagline) rempahTagline.textContent = data.tagline;
        if (rempahName) rempahName.textContent = data.name;
        if (rempahDesc) rempahDesc.textContent = data.desc;
        if (metricAroma) metricAroma.style.width = data.aroma;
        if (metricPengawet) metricPengawet.style.width = data.pengawet;
        if (rempahMenu) rempahMenu.textContent = data.menu;

        if (rempahDisplay) {
          rempahDisplay.style.opacity = '1';
          rempahDisplay.style.transform = 'scale(1)';
        }
      }, 150);
    });
  });


  /* ===================================================================
     3. SIMULATOR RACIK PIRING PADANG & INTEGRASI WHATSAPP
     =================================================================== */
  const WA_OWNER_NUMBER = '6281298765432'; // Nomor WhatsApp Pemilik Warung

  let racikanState = {
    nasi: { name: 'Nasi Putih + Kuah Gulai Gulung (Banjir)', price: 8000 },
    lauk: { name: 'Rendang Daging Sapi Marapi', price: 22000 },
    pelengkap: { name: 'Sambal Ijo + Daun Singkong Rebus', price: 4000 }
  };

  const groupNasi = document.querySelectorAll('#groupNasi .sim-btn');
  const groupLauk = document.querySelectorAll('#groupLauk .sim-btn');
  const groupPelengkap = document.querySelectorAll('#groupPelengkap .sim-btn');

  const sumNasi = document.getElementById('sumNasi');
  const priceNasi = document.getElementById('priceNasi');
  const sumLauk = document.getElementById('sumLauk');
  const priceLauk = document.getElementById('priceLauk');
  const sumPelengkap = document.getElementById('sumPelengkap');
  const pricePelengkap = document.getElementById('pricePelengkap');
  const totalSimulator = document.getElementById('totalSimulator');
  const btnPesanSimulator = document.getElementById('btnPesanSimulator');

  function formatRupiah(number) {
    return 'Rp ' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function updateSimulatorUI() {
    if (sumNasi) sumNasi.textContent = racikanState.nasi.name;
    if (priceNasi) priceNasi.textContent = formatRupiah(racikanState.nasi.price);

    if (sumLauk) sumLauk.textContent = racikanState.lauk.name;
    if (priceLauk) priceLauk.textContent = formatRupiah(racikanState.lauk.price);

    if (sumPelengkap) sumPelengkap.textContent = racikanState.pelengkap.name;
    if (pricePelengkap) pricePelengkap.textContent = formatRupiah(racikanState.pelengkap.price);

    const total = racikanState.nasi.price + racikanState.lauk.price + racikanState.pelengkap.price;
    if (totalSimulator) totalSimulator.textContent = formatRupiah(total);
  }

  function setupSimGroup(buttons, categoryKey) {
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        racikanState[categoryKey] = {
          name: btn.dataset.name,
          price: parseInt(btn.dataset.price, 10) || 0
        };

        updateSimulatorUI();
      });
    });
  }

  setupSimGroup(groupNasi, 'nasi');
  setupSimGroup(groupLauk, 'lauk');
  setupSimGroup(groupPelengkap, 'pelengkap');

  if (btnPesanSimulator) {
    btnPesanSimulator.addEventListener('click', () => {
      const total = racikanState.nasi.price + racikanState.lauk.price + racikanState.pelengkap.price;
      const textMessage = `Halo Uda Hendra Pemilik Warung Sabana Rancak! 🍲%0A%0ASaya ingin memesan Nasi Padang hasil racikan di website:%0A- Pilihan Nasi: *${encodeURIComponent(racikanState.nasi.name)}*%0A- Lauk Utama: *${encodeURIComponent(racikanState.lauk.name)}*%0A- Pelengkap: *${encodeURIComponent(racikanState.pelengkap.name)}*%0A*Perkiraan Total: ${encodeURIComponent(formatRupiah(total))}*%0A%0AApakah stok lauk ini masih tersedia Uda? Terima kasih!`;
      
      const waUrl = `https://wa.me/${WA_OWNER_NUMBER}?text=${textMessage}`;
      window.open(waUrl, '_blank');
    });
  }


  /* ===================================================================
     4. FILTER KATEGORI MENU & PESAN ITEM SATUAN KE WHATSAPP
     =================================================================== */
  const menuTabBtns = document.querySelectorAll('.menu-tab-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  menuTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      menuTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;

      menuCards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // Tombol "Pesan Item Ini" di setiap kartu menu
  const btnPesanItems = document.querySelectorAll('.btn-pesan-item');
  btnPesanItems.forEach(btn => {
    btn.addEventListener('click', () => {
      const itemName = btn.dataset.name;
      const itemPrice = parseInt(btn.dataset.price, 10);
      const text = `Halo Uda Hendra (Pemilik Warung), saya ingin memesan menu:*%0A%0A👉 *${encodeURIComponent(itemName)}* (${encodeURIComponent(formatRupiah(itemPrice))})%0A%0ABagaimana cara pemesanan dan pengirimannya Uda?`;
      const url = `https://wa.me/${WA_OWNER_NUMBER}?text=${text}`;
      window.open(url, '_blank');
    });
  });


  /* ===================================================================
     5. FORM PEMESANAN RINCI LANGSUNG KE WHATSAPP
     =================================================================== */
  const waForm = document.getElementById('waForm');
  if (waForm) {
    waForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const clientName = document.getElementById('clientName').value.trim();
      const orderType = document.getElementById('orderType').value;
      const portionCount = document.getElementById('portionCount').value;
      const dishChoices = document.getElementById('dishChoices').value.trim();
      const clientNotes = document.getElementById('clientNotes').value.trim();

      if (!clientName || !dishChoices) {
        alert('Mohon isi nama Anda dan pilihan lauk yang diinginkan.');
        return;
      }

      let message = `*FORMAT PEMESANAN NASI PADANG SABANA RANCAK*%0A`;
      message += `-----------------------------------%0A`;
      message += `👤 *Nama Pemesan:* ${encodeURIComponent(clientName)}%0A`;
      message += `📦 *Tipe Pesanan:* ${encodeURIComponent(orderType)}%0A`;
      message += `🔢 *Jumlah Porsi:* ${encodeURIComponent(portionCount)} porsi%0A`;
      message += `🍛 *Lauk yang Dipesan:* ${encodeURIComponent(dishChoices)}%0A`;
      if (clientNotes) {
        message += `📝 *Catatan Khusus:* ${encodeURIComponent(clientNotes)}%0A`;
      }
      message += `-----------------------------------%0A`;
      message += `_Pesan dikirim melalui formulir website resmi Warung Sabana Rancak_`;

      const targetUrl = `https://wa.me/${WA_OWNER_NUMBER}?text=${message}`;
      window.open(targetUrl, '_blank');
    });
  }


  /* ===================================================================
     6. MODAL POP-UP KONTAK PEMILIK WARUNG
     =================================================================== */
  const kontakModal = document.getElementById('kontakModal');
  const btnBukaKontak = document.getElementById('btnBukaKontak');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalGoToForm = document.getElementById('modalGoToForm');

  function openModal() {
    if (kontakModal) {
      kontakModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (kontakModal) {
      kontakModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (btnBukaKontak) {
    btnBukaKontak.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (kontakModal) {
    kontakModal.addEventListener('click', (e) => {
      if (e.target === kontakModal) {
        closeModal();
      }
    });
  }

  if (modalGoToForm) {
    modalGoToForm.addEventListener('click', () => {
      closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && kontakModal && kontakModal.classList.contains('active')) {
      closeModal();
    }
  });


  /* ===================================================================
     7. STICKY NAVBAR SCROLL & MOBILE MENU TOGGLE
     =================================================================== */
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Tutup menu mobile ketika link ditekan
    const mobileLinks = navMenu.querySelectorAll('.nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

});
