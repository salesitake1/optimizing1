import { useEffect, useRef } from 'react';

interface CitySectionProps {
  id: string;
  cityLabel: string;
  cityName: string;
  cityNameItalic: string;
  cityKey: string;
}

interface Model {
  name: string;
  age: number;
  district: string;
  price: number;
  height: number;
  weight: number;
  views: number;
  tags: string[];
  vip: boolean;
  image?: string;
}

const cityModels: Record<string, Model[]> = {
  sg: [
    { name: 'Mai Linh', age: 22, district: 'Quận 1, TP.HCM', price: 16, height: 162, weight: 50, views: 185.4, tags: ['Nhiệt tình', 'Chiều chuộng'], vip: true, image: 'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large' },
    { name: 'Thùy Tiên', age: 20, district: 'Quận 3, TP.HCM', price: 15, height: 165, weight: 52, views: 172.1, tags: ['Tính cảm', 'Lắng nghe'], vip: true, image: 'https://pbs.twimg.com/media/HCK-MlwaYAAi1lD?format=jpg&name=large' },
    { name: 'Hà Mỹ', age: 19, district: 'Quận 10, TP.HCM', price: 13.5, height: 160, weight: 48, views: 165.3, tags: ['Hài hước', 'Dễ thương'], vip: true, image: 'https://pbs.twimg.com/media/HCK-V3VakAA1w36?format=jpg&name=medium' },
    { name: 'Khánh Huyền', age: 23, district: 'Bình Thạnh, TP.HCM', price: 13, height: 163, weight: 51, views: 158.9, tags: ['Qua đêm', 'Lãng mạn'], vip: false, image: 'https://pbs.twimg.com/media/HCK-cgjacAAaftq?format=jpg&name=large' },
    { name: 'Mỹ Linh', age: 21, district: 'Quận 7, TP.HCM', price: 11.5, height: 168, weight: 54, views: 149.8, tags: ['Vui vẻ', 'Năng động'], vip: true, image: 'https://pbs.twimg.com/media/HCK-kxHbAAEsvWD?format=jpg&name=medium' },
    { name: 'Phương Anh', age: 24, district: 'Quận 2, TP.HCM', price: 8, height: 155, weight: 46, views: 145.2, tags: ['Chiều chuộng', 'Dễ thương'], vip: false, image: 'https://pbs.twimg.com/media/HCK-u7QaAAAnu2v?format=jpg&name=medium' },
    { name: 'Ngọc Trinh', age: 22, district: 'Phú Nhuận, TP.HCM', price: 12, height: 164, weight: 50, views: 141.1, tags: ['Nhiệt tình', 'Chu đáo'], vip: true, image: 'https://pbs.twimg.com/media/HCK_Ac_boAAcWPI?format=jpg&name=medium' },
    { name: 'Bảo Châu', age: 21, district: 'Quận 5, TP.HCM', price: 14, height: 166, weight: 53, views: 138, tags: ['Sang trọng', 'Lịch sự'], vip: false, image: 'https://pbs.twimg.com/media/HCK_oIuagAE2wi6?format=jpg&name=large' },
    { name: 'Lan Anh', age: 23, district: 'Gò Vấp, TP.HCM', price: 10, height: 158, weight: 47, views: 132, tags: ['Thân thiện'], vip: false, image: 'https://pbs.twimg.com/media/HCK_4jkbQAA_EI8?format=jpg&name=large' },
    { name: 'Thu Hà', age: 22, district: 'Quận 1, TP.HCM', price: 14.5, height: 164, weight: 49, views: 168.2, tags: ['Dễ thương', 'Nhiệt tình'], vip: true, image: 'https://pbs.twimg.com/media/HCLANcNaAAEeOkJ?format=jpg&name=large' },
    { name: 'Minh Thư', age: 20, district: 'Quận 3, TP.HCM', price: 12, height: 161, weight: 48, views: 155.8, tags: ['Trẻ trung', 'Lãng mạn'], vip: true, image: 'https://pbs.twimg.com/media/HCLCyN8akAAJxD2?format=jpg&name=large' },
    { name: 'Hồng Ngọc', age: 21, district: 'Quận 10, TP.HCM', price: 13, height: 162, weight: 50, views: 149.5, tags: ['Quyến rũ', 'Chiều chuộng'], vip: true, image: 'https://pbs.twimg.com/media/HCK_NmSbIAAFXoE?format=jpg&name=large' },
  ],
  hn: [
    { name: 'Hồng Thắm', age: 21, district: 'Hoàn Kiếm, Hà Nội', price: 15, height: 163, weight: 49, views: 178.2, tags: ['Dịu dàng', 'Lắng nghe'], vip: true, image: 'https://pbs.twimg.com/media/HCXQeYlaAAAZlRl?format=jpg&name=large' },
    { name: 'Diệu Nhi', age: 23, district: 'Ba Đình, Hà Nội', price: 14, height: 160, weight: 51, views: 164.5, tags: ['Nhiệt tình', 'Vui vẻ'], vip: true, image: 'https://pbs.twimg.com/media/HCYKfzqawAEXa3Z?format=jpg&name=4096x4096' },
    { name: 'Ngọc Thảo', age: 19, district: 'Cầu Giấy, Hà Nội', price: 12, height: 165, weight: 47, views: 158.1, tags: ['Chiều chuộng', 'Dễ thương'], vip: true, image: 'https://pbs.twimg.com/media/HCXQ8pKb0AAjRnD?format=jpg&name=large' },
    { name: 'Thanh Hà', age: 22, district: 'Hoàn Kiếm, Hà Nội', price: 14, height: 163, weight: 50, views: 162.4, tags: ['Dịu dàng', 'Tình cảm'], vip: true, image: 'https://pbs.twimg.com/media/HCXREcLaoAAbuxn?format=jpg&name=large' },
    { name: 'Bích Phương', age: 23, district: 'Ba Đình, Hà Nội', price: 15, height: 166, weight: 52, views: 171.3, tags: ['Sang trọng', 'Quyến rũ'], vip: true, image: 'https://pbs.twimg.com/media/HCXd4N9bIAAvMuP?format=jpg&name=4096x4096' },
    { name: 'Quỳnh Anh', age: 21, district: 'Cầu Giấy, Hà Nội', price: 13, height: 162, weight: 49, views: 155.7, tags: ['Vui vẻ', 'Năng động'], vip: false, image: 'https://pbs.twimg.com/media/HCXeJMpa4AA5h_1?format=jpg&name=4096x4096' },
    { name: 'Trà My', age: 20, district: 'Hoàn Kiếm, Hà Nội', price: 11.5, height: 160, weight: 47, views: 148.2, tags: ['Dịu dàng', 'Tình cảm'], vip: true, image: 'https://pbs.twimg.com/media/HCXeRBXbMAEH_nT?format=jpg&name=4096x4096' },
    { name: 'Hải Yến', age: 24, district: 'Ba Đình, Hà Nội', price: 16, height: 167, weight: 53, views: 175.1, tags: ['Chín chắn', 'Tình cảm'], vip: true, image: 'https://pbs.twimg.com/media/HCXeaKkbYAArNz6?format=jpg&name=4096x4096' },
    { name: 'Vân Anh', age: 22, district: 'Cầu Giấy, Hà Nội', price: 13.5, height: 164, weight: 50, views: 159.8, tags: ['Lãng mạn', 'Năng động'], vip: true, image: 'https://pbs.twimg.com/media/HCXeiHWagAAUQXJ?format=jpg&name=4096x4096' },
    { name: 'Phương Linh', age: 21, district: 'Hoàn Kiếm, Hà Nội', price: 12.5, height: 161, weight: 49, views: 151.4, tags: ['Dễ thương', 'Vui vẻ'], vip: true, image: 'https://pbs.twimg.com/media/HCXeuk7awAAGFtJ?format=jpg&name=4096x4096' },
    { name: 'Thúy Nga', age: 23, district: 'Ba Đình, Hà Nội', price: 14.5, height: 165, weight: 51, views: 163.6, tags: ['Tính cảm', 'Lắng nghe'], vip: true, image: 'https://pbs.twimg.com/media/HCXe1IpacAAex_N?format=jpg&name=4096x4096' },
    { name: 'Mỹ Duyên', age: 20, district: 'Cầu Giấy, Hà Nội', price: 11, height: 159, weight: 47, views: 144.9, tags: ['Trẻ trung', 'Năng động'], vip: false, image: 'https://pbs.twimg.com/media/HCYU9Qia4AE7t3r?format=jpg&name=4096x4096' },
  ],
  dn: [
    { name: 'Hoài Thương', age: 20, district: 'Hải Châu, Đà Nẵng', price: 13, height: 161, weight: 48, views: 162.3, tags: ['Vui vẻ', 'Năng động'], vip: true, image: 'https://pbs.twimg.com/media/HCYLoKGaUAAT6A7?format=jpg&name=large' },
    { name: 'Cẩm Ly', age: 22, district: 'Thanh Khê, Đà Nẵng', price: 11, height: 164, weight: 52, views: 151.8, tags: ['Chiều chuộng', 'Lãng mạn'], vip: true, image: 'https://pbs.twimg.com/media/HCYL8goakAEdzSB?format=jpg&name=4096x4096' },
    { name: 'Thiên Kim', age: 25, district: 'Sơn Trà, Đà Nẵng', price: 15, height: 158, weight: 50, views: 144.2, tags: ['Sang trọng', 'Tinh tế'], vip: true, image: 'https://pbs.twimg.com/media/HCYMKKcaIAAF6LI?format=jpg&name=4096x4096' },
    { name: 'Bảo Ngọc', age: 22, district: 'Hải Châu, Đà Nẵng', price: 13.5, height: 162, weight: 50, views: 157.2, tags: ['Dễ thương', 'Nhiệt tình'], vip: true, image: 'https://pbs.twimg.com/media/HCYMSd3acAAZGA6?format=jpg&name=large' },
    { name: 'Yến Nhi', age: 21, district: 'Thanh Khê, Đà Nẵng', price: 12, height: 161, weight: 48, views: 149.6, tags: ['Vui vẻ', 'Năng động'], vip: false, image: 'https://pbs.twimg.com/media/HCYMcR7bcAAL7R3?format=jpg&name=4096x4096' },
    { name: 'Khánh Phương', age: 23, district: 'Sơn Trà, Đà Nẵng', price: 14, height: 164, weight: 51, views: 161.3, tags: ['Thanh lịch', 'Tính cảm'], vip: true, image: 'https://pbs.twimg.com/media/HCYM5ouaYAAbNJp?format=jpg&name=4096x4096' },
    { name: 'Hà Phương', age: 24, district: 'Hải Châu, Đà Nẵng', price: 15.5, height: 166, weight: 53, views: 168.9, tags: ['Chín chắn', 'Sang trọng'], vip: true, image: 'https://pbs.twimg.com/media/HCYUeTYawAA7GrR?format=jpg&name=4096x4096' },
    { name: 'Kim Ngân', age: 20, district: 'Thanh Khê, Đà Nẵng', price: 11.5, height: 160, weight: 47, views: 143.7, tags: ['Trẻ trung', 'Dễ thương'], vip: true, image: 'https://pbs.twimg.com/media/HCYNL5JaQAAXv1P?format=jpg&name=4096x4096' },
    { name: 'Tuyết Mai', age: 25, district: 'Sơn Trà, Đà Nẵng', price: 16.5, height: 168, weight: 54, views: 176.4, tags: ['Chín chắn', 'Sang trọng'], vip: true, image: 'https://pbs.twimg.com/media/HCYNh6XaMAAZV-3?format=jpg&name=4096x4096' },
    { name: 'Linh Chi', age: 22, district: 'Hải Châu, Đà Nẵng', price: 13, height: 163, weight: 49, views: 150.8, tags: ['Dịu dàng', 'Tính cảm'], vip: true, image: 'https://pbs.twimg.com/media/HCYNrFIakAEumEb?format=jpg&name=large' },
    { name: 'Nhã Uyên', age: 21, district: 'Thanh Khê, Đà Nẵng', price: 12.5, height: 162, weight: 48, views: 147.2, tags: ['Thời trang', 'Thẩm mỹ'], vip: false, image: 'https://pbs.twimg.com/media/HCYN3hebwAAUIbo?format=jpg&name=4096x4096' },
    { name: 'Phúc An', age: 23, district: 'Sơn Trà, Đà Nẵng', price: 14.5, height: 165, weight: 51, views: 162.5, tags: ['Tĩnh tại', 'Chu đáo'], vip: true, image: 'https://pbs.twimg.com/media/HCYOBuxa8AEsOPo?format=jpg&name=4096x4096' },
  ],
  nt: [
    { name: 'Ngọc Hân', age: 23, district: 'Lộc Thọ, Nha Trang', price: 14, height: 165, weight: 51, views: 171.5, tags: ['Lãng mạn', 'Chiều chuộng'], vip: true, image: 'https://pbs.twimg.com/media/HCYOQW6bYAAm6og?format=jpg&name=4096x4096' },
    { name: 'Hương Giang', age: 19, district: 'Phương Sài, Nha Trang', price: 10, height: 160, weight: 48, views: 159.3, tags: ['Vui vẻ', 'Năng động'], vip: true, image: 'https://pbs.twimg.com/media/HCYOXwnaoAAT397?format=jpg&name=4096x4096' },
    { name: 'Thảo Nguyên', age: 21, district: 'Phương Sơn, Nha Trang', price: 12, height: 163, weight: 50, views: 148.7, tags: ['Nhẹ nhàng', 'Dịu dàng'], vip: true, image: 'https://pbs.twimg.com/media/HCYOmMYbkAABZzR?format=jpg&name=large' },
    { name: 'Minh Châu', age: 22, district: 'Lộc Thọ, Nha Trang', price: 13.5, height: 163, weight: 49, views: 154.3, tags: ['Dễ thương', 'Nhiệt tình'], vip: true, image: 'https://pbs.twimg.com/media/HCYOuMEawAATMAK?format=jpg&name=4096x4096' },
    { name: 'Lan Phương', age: 24, district: 'Phương Sài, Nha Trang', price: 15, height: 166, weight: 52, views: 170.2, tags: ['Chín chắn', 'Sang trọng'], vip: true, image: 'https://pbs.twimg.com/media/HCYUr2BbQAAWsOr?format=jpg&name=4096x4096' },
    { name: 'Nhã Di', age: 20, district: 'Lộc Thọ, Nha Trang', price: 11, height: 160, weight: 47, views: 141.5, tags: ['Trẻ trung', 'Năng động'], vip: false, image: 'https://pbs.twimg.com/media/HCYPtSNagAAc8E7?format=jpg&name=4096x4096' },
    { name: 'Quỳnh Như', age: 23, district: 'Phương Sơn, Nha Trang', price: 14, height: 164, weight: 50, views: 159.7, tags: ['Dịu dàng', 'Tính cảm'], vip: true, image: 'https://pbs.twimg.com/media/HCYP7wNaUAAhmFt?format=jpg&name=4096x4096' },
    { name: 'Hồng Loan', age: 21, district: 'Lộc Thọ, Nha Trang', price: 12.5, height: 162, weight: 49, views: 150.4, tags: ['Vui vẻ', 'Năng động'], vip: true, image: 'https://pbs.twimg.com/media/HCYQEiFaYAAJ8Up?format=jpg&name=large' },
    { name: 'Bảo Trân', age: 25, district: 'Phương Sài, Nha Trang', price: 16, height: 167, weight: 53, views: 174.6, tags: ['Chín chắn', 'Chu đáo'], vip: true, image: 'https://pbs.twimg.com/media/HCYQWX5a8AAYXF1?format=jpg&name=4096x4096' },
    { name: 'Ánh Nguyệt', age: 22, district: 'Phương Sơn, Nha Trang', price: 13, height: 161, weight: 48, views: 146.9, tags: ['Lãng mạn', 'Tính cảm'], vip: true, image: 'https://pbs.twimg.com/media/HCYQmA_bIAEb2M7?format=jpg&name=4096x4096' },
    { name: 'Kim Anh', age: 20, district: 'Lộc Thọ, Nha Trang', price: 10.5, height: 159, weight: 46, views: 138.2, tags: ['Trẻ trung', 'Dễ thương'], vip: false, image: 'https://pbs.twimg.com/media/HCYQ27tbsAAwa7o?format=jpg&name=4096x4096' },
    { name: 'Thùy Dương', age: 23, district: 'Phương Sài, Nha Trang', price: 14.5, height: 165, weight: 51, views: 163.8, tags: ['Thanh lịch', 'Tính cảm'], vip: true, image: 'https://pbs.twimg.com/media/HCYRE64bIAAklz5?format=jpg&name=4096x4096' },
  ],
};

export default function CitySection({ id, cityLabel, cityName, cityNameItalic, cityKey }: CitySectionProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    currentX: 0,
    velocity: 0,
    lastX: 0,
    lastTime: 0,
    animationId: null as number | null,
    hasMoved: false
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );
      observer.observe(section);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const track = document.getElementById(`track-${cityKey}`) as HTMLDivElement;
    if (!track) return;

    trackRef.current = track;
    const container = track.parentElement;
    if (!container) return;

    const models = cityModels[cityKey] || [];

    track.innerHTML = models.map((model, index) => {
      const rank = index < 3 ? index + 1 : 0;
      const rankClass = rank > 0 ? `rank-${rank}` : '';

      return `
        <div class="model-card">
          <div class="card-img-wrap">
            ${model.image ? `<img src="${model.image}" alt="${model.name}" class="card-img" />` : `<div class="card-img-placeholder">${String(index + 1).padStart(2, '0')}</div>`}
            ${rank > 0 ? `<div class="badge-rank ${rankClass}">${rank}</div>` : ''}
            ${model.vip ? '<div class="badge-vip">VIP</div>' : ''}
            <div class="card-gradient"></div>
          </div>
          <div class="card-info">
            <div class="card-name">${model.name}</div>
            <div class="card-age-area">${model.age} tuổi · ${model.district}</div>
            <div class="card-stats">
              <div class="card-stat-row">
                <span class="cs-label">Giá</span>
                <span class="cs-val gold">${model.price}tr</span>
              </div>
              <div class="card-stat-row">
                <span class="cs-label">Cao / Nặng</span>
                <span class="cs-val">${model.height}cm / ${model.weight}kg</span>
              </div>
              <div class="card-stat-row">
                <span class="cs-label">Lượt xem</span>
                <span class="cs-val gold">${model.views}k</span>
              </div>
            </div>
            <div class="card-tags">
              ${model.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
            </div>
            <button class="card-btn" onclick="window.open('/profile?city=${cityKey}&name=${encodeURIComponent(model.name)}', '_blank')">Xem chi tiết</button>
          </div>
        </div>
      `;
    }).join('');

    void track.offsetHeight;

    track.style.willChange = 'transform';
    track.style.cursor = 'grab';

    const setTransform = (x: number, smooth = false) => {
      const container = track.parentElement;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const trackWidth = track.scrollWidth;
      const maxScroll = Math.max(0, trackWidth - containerWidth + 64);
      const clampedX = Math.max(-maxScroll, Math.min(0, x));

      if (smooth) {
        track.style.transition = 'transform 0.2s ease-out';
      } else {
        track.style.transition = 'none';
      }

      track.style.transform = `translate3d(${clampedX}px, 0, 0)`;
      dragStateRef.current.currentX = clampedX;
    };

    const stopAnimation = () => {
      if (dragStateRef.current.animationId !== null) {
        cancelAnimationFrame(dragStateRef.current.animationId);
        dragStateRef.current.animationId = null;
      }
    };

    const applyMomentum = () => {
      stopAnimation();

      const friction = 0.92;
      let velocity = dragStateRef.current.velocity;
      let position = dragStateRef.current.currentX;

      const animate = () => {
        if (Math.abs(velocity) < 0.3) {
          dragStateRef.current.velocity = 0;
          const container = track.parentElement;
          if (container) {
            const containerWidth = container.offsetWidth;
            const trackWidth = track.scrollWidth;
            const maxScroll = Math.max(0, trackWidth - containerWidth + 64);
            const finalPosition = Math.max(-maxScroll, Math.min(0, position));
            setTransform(finalPosition, true);
          }
          return;
        }

        velocity *= friction;
        position += velocity;

        const container = track.parentElement;
        if (!container) return;

        const containerWidth = container.offsetWidth;
        const trackWidth = track.scrollWidth;
        const maxScroll = Math.max(0, trackWidth - containerWidth + 64);

        if (position > 0) {
          position = Math.min(position, 30);
          velocity *= 0.75;
        }
        if (position < -maxScroll) {
          position = Math.max(position, -maxScroll - 30);
          velocity *= 0.75;
        }

        setTransform(position, false);

        if (Math.abs(velocity) >= 0.3) {
          dragStateRef.current.animationId = requestAnimationFrame(animate);
        }
      };

      if (Math.abs(velocity) > 0.3) {
        dragStateRef.current.animationId = requestAnimationFrame(animate);
      }
    };

    const getClientX = (e: MouseEvent | TouchEvent) => {
      return 'touches' in e ? e.touches[0].clientX : e.clientX;
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      stopAnimation();
      dragStateRef.current.isDown = true;
      dragStateRef.current.hasMoved = false;
      dragStateRef.current.velocity = 0;

      const clientX = getClientX(e);
      dragStateRef.current.startX = clientX;
      dragStateRef.current.lastX = clientX;
      dragStateRef.current.lastTime = performance.now();

      track.style.cursor = 'grabbing';
      track.style.transition = 'none';
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!dragStateRef.current.isDown) return;

      const clientX = getClientX(e);
      const deltaX = clientX - dragStateRef.current.lastX;

      if (Math.abs(clientX - dragStateRef.current.startX) > 3) {
        dragStateRef.current.hasMoved = true;
        if (e.cancelable) {
          e.preventDefault();
        }
      }

      const now = performance.now();
      const deltaTime = Math.max(now - dragStateRef.current.lastTime, 1);
      const rawVelocity = (deltaX / deltaTime) * 16;
      dragStateRef.current.velocity = rawVelocity * 1.3;
      dragStateRef.current.lastX = clientX;
      dragStateRef.current.lastTime = now;

      const totalDelta = clientX - dragStateRef.current.startX;
      let newPosition = dragStateRef.current.currentX + totalDelta;

      const container = track.parentElement;
      if (container) {
        const containerWidth = container.offsetWidth;
        const trackWidth = track.scrollWidth;
        const maxScroll = Math.max(0, trackWidth - containerWidth + 64);

        if (newPosition > 0) {
          newPosition = newPosition * 0.35;
        } else if (newPosition < -maxScroll) {
          const overshoot = newPosition + maxScroll;
          newPosition = -maxScroll + (overshoot * 0.35);
        }
      }

      dragStateRef.current.startX = clientX;
      setTransform(newPosition, false);
    };

    const handleEnd = () => {
      if (!dragStateRef.current.isDown) return;

      dragStateRef.current.isDown = false;
      track.style.cursor = 'grab';

      if (dragStateRef.current.hasMoved) {
        const cards = track.querySelectorAll('.model-card');
        cards.forEach((card) => {
          const handleClick = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            card.removeEventListener('click', handleClick, true);
          };
          card.addEventListener('click', handleClick, true);
          setTimeout(() => card.removeEventListener('click', handleClick, true), 300);
        });

        applyMomentum();
      }
    };

    track.addEventListener('pointerdown', handleStart as EventListener);
    window.addEventListener('pointermove', handleMove as EventListener, { passive: false });
    window.addEventListener('pointerup', handleEnd);
    window.addEventListener('pointercancel', handleEnd);
    track.addEventListener('mouseleave', handleEnd);

    return () => {
      stopAnimation();
      track.removeEventListener('pointerdown', handleStart as EventListener);
      window.removeEventListener('pointermove', handleMove as EventListener);
      window.removeEventListener('pointerup', handleEnd);
      window.removeEventListener('pointercancel', handleEnd);
      track.removeEventListener('mouseleave', handleEnd);
    };
  }, [cityKey]);

  const handleSlide = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;

    const container = track.parentElement;
    if (!container) return;

    const card = track.querySelector('.model-card') as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 19.2;
    const scrollAmount = (cardWidth + gap) * 3;
    const currentX = dragStateRef.current.currentX;
    const targetX = currentX + (scrollAmount * -direction);

    const containerWidth = container.offsetWidth;
    const trackWidth = track.scrollWidth;
    const maxScroll = Math.max(0, trackWidth - containerWidth + 64);

    const clampedX = Math.max(-maxScroll, Math.min(0, targetX));

    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    track.style.transform = `translate3d(${clampedX}px, 0, 0)`;
    dragStateRef.current.currentX = clampedX;

    setTimeout(() => {
      track.style.transition = '';
    }, 500);
  };

  return (
    <section className="city-section" id={id} ref={sectionRef}>
      <div className="city-header reveal">
        <div className="city-name-wrap">
          <div className="city-label">{cityLabel}</div>
          <h2 className="city-name">
            {cityName} <em>{cityNameItalic}</em>
          </h2>
        </div>
        <div className="city-meta">
          <div className="city-nav-btns">
            <button className="cnav" onClick={() => handleSlide(-1)}>←</button>
            <button className="cnav" onClick={() => handleSlide(1)}>→</button>
          </div>
        </div>
      </div>
      <div className="carousel-outer">
        <div className="carousel-track" id={`track-${cityKey}`}>
        </div>
      </div>
    </section>
  );
}
