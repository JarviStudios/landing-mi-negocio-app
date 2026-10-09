import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Bell,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Menu,
  Package,
  ShoppingBasket,
  Smartphone,
  Truck,
  Wallet,
  Zap,
  X,
} from 'lucide-react';

const playUrl = 'https://play.google.com/store/apps/details?id=com.minegocioapp.app';
const whatsappUrl = 'https://wa.me/50254376585';
const legalUrl = 'https://www.privacypolicies.com/live/532feec5-3413-4469-a859-61730a2ed823';

const appScreens = [
  {
    key: 'orders',
    label: 'Pedidos y cuentas',
    src: '/promotional-screens/01-orders.png',
    alt: 'Captura real de pedidos y cuentas activas en Mi Negocio App',
    width: 402,
    height: 874,
  },
  {
    key: 'inventory',
    label: 'Inventario',
    src: '/promotional-screens/02-inventario.png',
    alt: 'Captura real del inventario, productos y alertas de stock de Mi Negocio App',
    width: 402,
    height: 874,
  },
  {
    key: 'sales',
    label: 'Ventas y caja',
    src: '/promotional-screens/03-ventas-real.jpeg',
    alt: 'Captura real de ventas, caja actual e historial por fecha en Mi Negocio App',
    width: 540,
    height: 1196,
  },
  {
    key: 'quick-sale',
    label: 'Cobro rápido',
    src: '/promotional-screens/07-cobro-rapido.jpeg',
    alt: 'Catálogo de productos con fotos y botón para cobrar una venta en Mi Negocio App',
    width: 540,
    height: 1196,
  },
  {
    key: 'payments',
    label: 'Métodos de pago',
    src: '/promotional-screens/08-metodos-pago.jpeg',
    alt: 'Opciones de cobro en efectivo, transferencia, tarjeta, fiado y pago mixto',
    width: 540,
    height: 1196,
  },
  {
    key: 'receipt',
    label: 'Recibo de venta',
    src: '/promotional-screens/09-recibo-venta.jpeg',
    alt: 'Recibo de venta claro con opciones para compartir por WhatsApp o generar PDF',
    width: 540,
    height: 1196,
  },
  {
    key: 'cash-change',
    label: 'Cambio y vuelto',
    src: '/promotional-screens/10-cambio-vuelto.jpeg',
    alt: 'Confirmación de cobro en efectivo con cálculo del cambio para el cliente',
    width: 540,
    height: 1196,
  },
  {
    key: 'debts',
    label: 'Deudas',
    src: '/promotional-screens/04-deudas.png',
    alt: 'Captura real de cuentas pendientes por cobrar en Mi Negocio App',
    width: 402,
    height: 874,
  },
  {
    key: 'suppliers',
    label: 'Proveedores',
    src: '/promotional-screens/05-proveedores.png',
    alt: 'Captura real de la gestión de proveedores en Mi Negocio App',
    width: 402,
    height: 874,
  },
  {
    key: 'settings',
    label: 'Ajustes',
    src: '/promotional-screens/06-ajustes.png',
    alt: 'Captura real de los ajustes del negocio en Mi Negocio App',
    width: 402,
    height: 874,
  },
] as const;

const features = [
  {
    number: '01',
    icon: Package,
    title: 'Inventario y alertas al día',
    text: 'Revisa existencias y detecta qué hace falta reponer antes de que se termine. Así el emprendedor mantiene su negocio bajo control.',
    detail: 'Existencias al día · Avisos de stock bajo',
    tone: 'sage',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Cobros y ventas en un clic',
    text: 'Elige los productos, revisa el total y pasa al cobro en pocos toques. Cada venta queda registrada al instante para seguir atendiendo.',
    detail: 'Cobro rápido · Venta registrada',
    tone: 'yellow',
  },
  {
    number: '03',
    icon: Camera,
    title: 'Fotos propias de tus productos',
    text: 'Toma y guarda fotos desde el celular para reconocer cada artículo fácilmente en el catálogo al momento de vender.',
    detail: 'Tu catálogo · Tus fotografías',
    tone: 'coral',
  },
  {
    number: '04',
    icon: CreditCard,
    title: 'Pagos y recibos de caja',
    text: 'Registra efectivo, transferencia o tarjeta. Genera comprobantes claros y compártelos por WhatsApp o como PDF para tus clientes.',
    detail: 'Efectivo · Transferencia · Tarjeta',
    tone: 'blue',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Gestión de Proveedores',
    text: 'Guarda los datos de tus proveedores y ten a mano a quién llamar cuando un producto empieza a escasear.',
    detail: 'Contactos organizados · Reposición fácil',
    tone: 'coral',
  },
  {
    number: '06',
    icon: Bell,
    title: 'Notificaciones Automáticas',
    text: 'Recibe avisos útiles para estar pendiente de tu inventario y de las tareas de tu emprendimiento, sin revisar cada producto uno por uno.',
    detail: 'Avisos oportunos · Más claridad',
    tone: 'blue',
  },
  {
    number: '07',
    icon: Wallet,
    title: 'Caja por turno e historial de ventas',
    text: 'Consulta la caja actual, revisa las ventas por fecha, registra el cierre de turno y mira la ganancia proyectada.',
    detail: 'Caja actual · Cierre · Historial',
    tone: 'lavender',
  },
  {
    number: '08',
    icon: ShoppingBasket,
    title: 'Pedidos y cuentas al día',
    text: 'Consulta pedidos activos y lleva las cuentas pendientes de tus clientes para no perder de vista cada venta.',
    detail: 'Pedidos · Cuentas de clientes',
    tone: 'mint',
  },
];

const featureToneClasses: Record<string, string> = {
  sage: 'bg-[#e8eee2]',
  yellow: 'bg-[#f3e8c8]',
  coral: 'bg-[#f3e2d8]',
  blue: 'bg-[#e4ece8]',
  lavender: 'bg-[#eee8f7]',
  mint: 'bg-[#e2eee6]',
};

const questions = [
  {
    q: '¿Mi Negocio App es un punto de venta gratis para emprendedores?',
    a: 'Descárgala desde Google Play Store y comienza a organizar las ventas y el inventario de tu emprendimiento. Consulta la ficha de la app para conocer sus condiciones actuales.',
  },
  {
    q: '¿Qué métodos de pago puedo registrar?',
    a: 'Puedes registrar efectivo, transferencia o tarjeta. También aparecen opciones de fiado y pago mixto. Después puedes compartir el recibo por WhatsApp o generar un PDF para imprimir.',
  },
  {
    q: '¿Puedo guardar fotos propias de mis productos?',
    a: 'Sí. La app permite capturar y guardar fotografías desde el celular para identificar los productos en el catálogo cuando registras una venta.',
  },
  {
    q: '¿Puedo revisar la caja y el historial de ventas?',
    a: 'Sí. Puedes consultar los totales del turno, revisar ventas por fecha y registrar el cierre de caja desde Mi Negocio App.',
  },
  {
    q: '¿Las imágenes de esta página son capturas reales?',
    a: 'Sí. Incluimos capturas reales de ventas, caja, pedidos, inventario, cobros, métodos de pago, recibos, proveedores y ajustes.',
  },
];

function BrandMark() {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="Mi Negocio App, inicio">
      <img
        src="/app-icon.png"
        alt=""
        width={512}
        height={512}
        aria-hidden="true"
        className="h-10 w-10 rounded-[14px] object-contain"
      />
      <span className="leading-none">
        <span className="block font-semibold tracking-[-.04em] text-[#1c3d34]">mi negocio</span>
        <span className="mt-1 block text-[10px] font-bold uppercase tracking-[.19em] text-[#718078]">app para crecer</span>
      </span>
    </a>
  );
}

function PlayButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={playUrl}
      target="_blank"
      rel="noreferrer"
      className={`cta inline-flex items-center justify-center gap-3 rounded-full bg-[#1d5847] px-6 py-4 font-semibold text-[#fff9e9] shadow-[0_8px_20px_rgba(29,88,71,.13)] ${compact ? 'text-sm' : 'text-[15px]'}`}
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f1c765] text-[#1d5847]">
        <ArrowRight size={15} strokeWidth={2.5} />
      </span>
      <span>Descargar en Google Play Store</span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04.02C5.49.02.15 5.36.15 11.91c0 2.1.55 4.16 1.6 5.98L.05 23.9l6.16-1.62a11.88 11.88 0 0 0 5.83 1.49h.01c6.55 0 11.89-5.34 11.89-11.89a11.83 11.83 0 0 0-3.42-8.4Zm-8.48 18.26h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.66.96.98-3.57-.23-.37a9.89 9.89 0 1 1 8.31 4.57Z" />
      <path d="M17.47 14.38c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.59-.49-.51-.68-.52-.17-.01-.38-.01-.58-.01s-.53.08-.81.38c-.28.3-1.06 1.03-1.06 2.5s1.09 2.91 1.24 3.11c.15.2 2.14 3.27 5.19 4.59.73.32 1.3.51 1.75.65.74.24 1.41.21 1.94.13.59-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

function PhoneMockup({
  screen,
  motion = 'sales',
}: {
  screen: (typeof appScreens)[number];
  motion?: 'sales' | 'stock' | 'still';
}) {
  const motionClass =
    motion === 'still' ? '' : motion === 'sales' ? 'phone-float' : 'phone-float-small';

  return (
    <div className={`relative w-[250px] rounded-[35px] border-[7px] border-[#183c34] bg-[#183c34] p-[4px] shadow-[0_34px_80px_rgba(25,55,47,.23)] ${motionClass}`}>
      <div className="overflow-hidden rounded-[26px] bg-white">
        <img
          src={screen.src}
          alt={screen.alt}
          width={screen.width}
          height={screen.height}
          loading={motion === 'still' ? 'lazy' : 'eager'}
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const [activeScreenIndex, setActiveScreenIndex] = useState(2);

  const closeMenu = () => setMenuOpen(false);
  const activeScreen = appScreens[activeScreenIndex];
  const showPreviousScreen = () =>
    setActiveScreenIndex((current) => (current - 1 + appScreens.length) % appScreens.length);
  const showNextScreen = () =>
    setActiveScreenIndex((current) => (current + 1) % appScreens.length);

  return (
    <>
      <main id="inicio" className="overflow-hidden">
      <header className="relative z-20 mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 md:px-10">
        <BrandMark />
        <nav className="hidden items-center gap-9 text-[13px] font-semibold text-[#53675e] md:flex" aria-label="Navegación principal">
          <a className="nav-link" href="#funciones">Funciones</a>
          <a className="nav-link" href="#como-funciona">Cómo funciona</a>
          <a className="nav-link" href="#preguntas">Preguntas</a>
          <a className="nav-link" href="#contacto">Contacto</a>
        </nav>
        <a href={playUrl} target="_blank" rel="noreferrer" className="hidden rounded-full border border-[#c9d0c4] px-5 py-3 text-[13px] font-bold text-[#24483c] transition hover:border-[#1d5847] hover:bg-[#e9eddf] sm:inline-flex">
          Descargar app <ArrowRight className="ml-2" size={15} />
        </a>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-[#d8d5c8] text-[#23473b] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && (
          <nav className="absolute left-4 right-4 top-[76px] flex flex-col gap-1 rounded-2xl border border-[#e0dccf] bg-[#faf7ed] p-3 shadow-xl md:hidden" aria-label="Navegación móvil">
            {[['Funciones', '#funciones'], ['Cómo funciona', '#como-funciona'], ['Preguntas', '#preguntas'], ['Contacto', '#contacto']].map(([label, href]) => (
              <a key={href} onClick={closeMenu} href={href} className="rounded-xl px-4 py-3 text-sm font-semibold text-[#294d40] hover:bg-[#eeecdf]">{label}</a>
            ))}
            <a onClick={closeMenu} href={playUrl} target="_blank" rel="noreferrer" className="mt-1 rounded-xl bg-[#1d5847] px-4 py-3 text-sm font-bold text-[#fff9e9]">Descargar en Google Play Store</a>
          </nav>
        )}
      </header>

      <section className="hero-grid relative mx-auto grid min-h-[690px] max-w-[1440px] grid-cols-1 items-center px-5 pb-16 pt-10 md:min-h-[690px] md:grid-cols-[1.02fr_.98fr] md:px-10 md:pb-24 md:pt-8">
        <div className="relative z-10 mx-auto w-full max-w-[630px] md:ml-auto md:mr-0 md:pb-9">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-[#d8d5c5] bg-[#f8f5ea]/80 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#4e7761]">
            <span className="h-2 w-2 rounded-full bg-[#df865f]" />
            Punto de venta y control de inventario
          </div>
          <h1 className="display reveal reveal-delay-1 mt-6 max-w-[690px] text-[clamp(2.9rem,6vw,5.8rem)] font-extrabold leading-[.99] text-[#1c3c33]">
            La herramienta hecha para el <span className="relative inline-block text-[#c56e4f]">emprendedor<span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-[#e9bd57]" /></span> guatemalteco
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-[500px] text-[16px] leading-[1.75] text-[#5c6b60] md:text-[17px]">
            Toma el control de tu emprendimiento desde tu celular: cobra en un clic, registra ventas, guarda fotos propias de tus productos y mantén el inventario en orden.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <PlayButton />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold text-[#778177]">
            <span className="inline-flex items-center gap-2"><Check size={14} className="text-[#438060]" /> Hecha para emprendedores guatemaltecos</span>
            <span className="inline-flex items-center gap-2"><Smartphone size={13} className="text-[#438060]" /> En tu celular, donde estés</span>
          </div>
        </div>

        <div className="relative mx-auto mt-16 flex h-[460px] w-full max-w-[610px] items-center justify-center md:mt-0 md:h-[600px]">
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e7d894]/50 md:h-[500px] md:w-[500px]" />
          <div className="grain absolute left-1/2 top-1/2 h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9c98d] md:h-[410px] md:w-[410px]" />
          <div className="absolute left-[-7%] top-[17%] z-20 hidden w-[238px] grid-cols-2 gap-2 sm:grid">
            <div className="rounded-[15px] border border-[#e5e5e5] bg-[#fafafa] px-3 py-2.5 shadow-[0_8px_20px_rgba(34,34,34,.07)]">
              <p className="text-[9px] font-medium uppercase leading-tight text-[#777777]">Hoy</p>
              <p className="mt-1.5 text-[14px] font-bold leading-tight tracking-[-.02em] text-[#8957e7]">Q2.00</p>
            </div>
            <div className="rounded-[15px] border border-[#e5e5e5] bg-[#fafafa] px-2.5 py-2.5 shadow-[0_8px_20px_rgba(34,34,34,.07)]">
              <p className="text-[8px] font-medium uppercase leading-tight text-[#777777]">Caja actual (turno)</p>
              <p className="mt-1.5 text-[14px] font-bold leading-tight tracking-[-.02em] text-[#8957e7]">Q793.00</p>
            </div>
          </div>
          <div className="absolute bottom-[15%] right-[2%] z-20 hidden w-[190px] rounded-[18px] border border-[#dfdccf] bg-[#fffdf4] p-3.5 shadow-[0_14px_35px_rgba(31,61,50,.1)] sm:block">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#f6e3d8] text-[#c16c4e]"><Bell size={15} /></span>
              <span className="text-[10px] font-bold text-[#2b493d]">Aviso de inventario</span>
            </div>
            <p className="mt-2 text-[10px] leading-relaxed text-[#718076]">Café molido: quedan pocas unidades.</p>
          </div>
          <div className="relative z-10 translate-x-5 md:translate-x-8"><PhoneMockup screen={appScreens[2]} /></div>
          <div className="absolute left-[2%] top-[27%] z-0 hidden scale-[.83] sm:block"><PhoneMockup screen={appScreens[1]} motion="stock" /></div>
          <div className="absolute bottom-[10%] left-[7%] z-20 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#dc7f5f] text-[#fff6e7] shadow-lg"><ArrowDownRight size={25} /></div>
          <p className="absolute bottom-[2%] right-[6%] z-20 max-w-[150px] text-right text-[9px] font-semibold uppercase leading-relaxed tracking-[.13em] text-[#748178]">Capturas reales<br />de la aplicación</p>
        </div>
      </section>

      <div className="relative overflow-hidden bg-[#1e5948] py-4 text-[#f7f2e4]">
        <div className="ticker-track flex w-max items-center gap-8 whitespace-nowrap text-[11px] font-bold uppercase tracking-[.19em]">
          {Array.from({ length: 2 }).map((_, group) => (
            <span key={group} className="flex items-center gap-8">
              <span>Emprendedores de Guatemala</span><span className="h-1.5 w-1.5 rounded-full bg-[#e5bd5c]" />
              <span>Cobros en un clic</span><span className="h-1.5 w-1.5 rounded-full bg-[#df8967]" />
              <span>Inventario bajo control</span><span className="h-1.5 w-1.5 rounded-full bg-[#e5bd5c]" />
              <span>Recibos claros para tus clientes</span><span className="h-1.5 w-1.5 rounded-full bg-[#df8967]" />
            </span>
          ))}
        </div>
      </div>

      <section id="funciones" className="mx-auto max-w-[1240px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-[.76fr_1.24fr] md:gap-16">
          <div className="md:sticky md:top-10 md:self-start">
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#bd6d50]">Hecha para el emprendedor guatemalteco</p>
            <h2 className="display mt-4 max-w-[470px] text-[clamp(2.4rem,4.5vw,4.25rem)] font-extrabold leading-[1.02] text-[#1e4036]">Cada producto, venta y cobro <span className="text-[#9baf8c]">en su lugar.</span></h2>
            <p className="mt-5 max-w-[370px] text-[15px] leading-[1.8] text-[#66756a]">Herramientas prácticas para que los emprendedores atiendan, repongan y cierren el día con más claridad.</p>
            <a href="#como-funciona" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#315c48]">Así de sencillo <ArrowDownRight size={16} /></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map(({ number, icon: Icon, title, text, detail, tone }) => (
              <article key={number} className={`feature-card relative min-h-[280px] overflow-hidden rounded-[25px] border border-[#e1ddcf] p-6 ${featureToneClasses[tone]}`}>
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#fffdf4]/80 text-[#315d4a]"><Icon size={20} strokeWidth={1.8} /></span>
                  <span className="text-[11px] font-bold tracking-[.12em] text-[#879087]">{number}</span>
                </div>
                <h3 className="display mt-7 text-[23px] font-bold leading-[1.12] tracking-[-.045em] text-[#214238]">{title}</h3>
                <p className="mt-3 text-[13px] leading-[1.65] text-[#5d6c61]">{text}</p>
                <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.09em] text-[#66806e]"><span className="h-1.5 w-1.5 rounded-full bg-[#c86f50]" />{detail}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="relative bg-[#e8e7d8]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-20 md:grid-cols-[1fr_.92fr] md:px-10 md:py-28">
          <div className="relative flex min-h-[420px] items-center justify-center">
            <div className="absolute h-[350px] w-[350px] rounded-full bg-[#d4ddca] md:h-[420px] md:w-[420px]" />
            <div className="relative z-10 flex flex-col items-center scale-[.92] md:scale-100">
              <PhoneMockup screen={activeScreen} motion="still" />
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPreviousScreen}
                  aria-label="Mostrar captura anterior"
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#c9d0c4] bg-[#fffdf3] text-[#315c48] transition hover:bg-[#dce5d5]"
                >
                  <ChevronLeft size={18} />
                </button>
                <span aria-live="polite" className="min-w-[116px] text-center text-[12px] font-bold text-[#315c48]">
                  {activeScreen.label}
                </span>
                <button
                  type="button"
                  onClick={showNextScreen}
                  aria-label="Mostrar captura siguiente"
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#c9d0c4] bg-[#fffdf3] text-[#315c48] transition hover:bg-[#dce5d5]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2" aria-label="Seleccionar captura">
                {appScreens.map((screen, index) => (
                  <button
                    key={screen.key}
                    type="button"
                    onClick={() => setActiveScreenIndex(index)}
                    aria-label={`Mostrar pantalla: ${screen.label}`}
                    aria-pressed={activeScreenIndex === index}
                    className={`h-2.5 rounded-full transition-all ${activeScreenIndex === index ? 'w-6 bg-[#315c48]' : 'w-2.5 bg-[#a8b4a2] hover:bg-[#66806e]'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-[510px] md:ml-4">
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#bd6d50]">Un buen comienzo</p>
            <h2 className="display mt-4 text-[clamp(2.6rem,4.8vw,4.6rem)] font-extrabold leading-[1.02] text-[#1d3f35]">Tu negocio ya tiene bastante que hacer.</h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#647267]">Por eso el control de inventario y las ventas empiezan con pasos directos. Sin hojas perdidas ni sistemas difíciles de descifrar.</p>
            <div className="mt-8 space-y-5">
              {[
                ['01', 'Anota tus productos', 'Organiza lo que vendes y consulta tus existencias desde el teléfono.'],
                ['02', 'Registra cada venta', 'Un registro rápido te ayuda a mantener tus números al día.'],
                ['03', 'Revisa y repón', 'Identifica qué falta antes de que un producto se termine.'],
              ].map(([n, title, body]) => (
                <div key={n} className="flex gap-4 border-t border-[#d2d4c4] pt-4">
                  <span className="pt-1 text-[11px] font-bold tracking-[.1em] text-[#c37354]">{n}</span>
                  <div><h3 className="text-[14px] font-bold text-[#294a3e]">{title}</h3><p className="mt-1 text-[12px] leading-relaxed text-[#6b796f]">{body}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-24 md:px-10 md:py-32">
        <div className="relative overflow-hidden rounded-[34px] bg-[#1d5847] px-7 py-12 text-[#f9f4e8] md:px-14 md:py-16">
          <div className="absolute -right-20 -top-28 h-[400px] w-[400px] rounded-full border border-[#ffffff]/10" />
          <div className="absolute -right-2 top-[-100px] h-[300px] w-[300px] rounded-full border border-[#ffffff]/10" />
          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-[680px]">
              <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#eac76c]">Un paso más ligero para tu tienda</p>
              <h2 className="display mt-4 text-[clamp(2.5rem,5vw,4.6rem)] font-extrabold leading-[1.02]">Vuelve a enfocarte en las personas que entran por tu puerta.</h2>
              <p className="mt-5 max-w-[500px] text-[14px] leading-[1.7] text-[#d4e0d4]">Prueba una forma más práctica de llevar ventas e inventario, estés en el mostrador o haciendo un pedido.</p>
            </div>
            <div className="md:pr-5">
              <PlayButton />
              <p className="mt-3 text-center text-[10px] text-[#b4c9b9]">Disponible en Google Play Store</p>
            </div>
          </div>
          <div className="relative z-10 mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-5 text-[10px] font-semibold uppercase tracking-[.12em] text-[#c8d8ca]">
            <span className="inline-flex items-center gap-2"><Check size={13} className="text-[#eac76c]" /> Ventas organizadas</span>
            <span className="inline-flex items-center gap-2"><Check size={13} className="text-[#eac76c]" /> Stock visible</span>
            <span className="inline-flex items-center gap-2"><Check size={13} className="text-[#eac76c]" /> Hecha para el teléfono</span>
          </div>
        </div>
      </section>

      <section id="preguntas" className="mx-auto max-w-[1060px] px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-10 md:grid-cols-[.75fr_1.25fr] md:gap-20">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#bd6d50]">Antes de empezar</p>
            <h2 className="display mt-4 text-[clamp(2.4rem,4vw,3.8rem)] font-extrabold leading-[1.03] text-[#1d4036]">Preguntas claras, respuestas claras.</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-[#6b796f]">Lo esencial para conocer Mi Negocio App.</p>
          </div>
          <div className="divide-y divide-[#d9d5c8] border-y border-[#d9d5c8]">
            {questions.map((item, index) => (
              <div key={item.q}>
                <button className="flex w-full items-center justify-between gap-5 py-5 text-left" onClick={() => setOpenQuestion(openQuestion === index ? null : index)} aria-expanded={openQuestion === index}>
                  <span className="text-[14px] font-bold text-[#2a4a3e] md:text-[15px]">{item.q}</span>
                  <ChevronDown size={17} className={`shrink-0 text-[#bd6d50] transition-transform ${openQuestion === index ? 'rotate-180' : ''}`} />
                </button>
                {openQuestion === index && <p className="max-w-[600px] pb-5 pr-8 text-[13px] leading-[1.8] text-[#68776d]">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contacto" className="bg-[#e8e7d8]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-9 px-5 py-11 sm:grid-cols-2 md:px-10 lg:grid-cols-[1fr_1.15fr_.7fr]">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-[330px] text-[12px] leading-[1.75] text-[#748076]">Mi Negocio App: una manera práctica de organizar ventas y control de inventario desde tu celular.</p>
            <a href={playUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold text-[#285342]">Descargar app <ArrowRight size={14} /></a>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <img
                src="/logoJS.jpeg"
                alt="Logo de Jarvistudio"
                width={640}
                height={640}
                loading="eager"
                className="h-[72px] w-[72px] shrink-0 rounded-2xl border border-[#e1ddcf] bg-white p-1 object-contain"
              />
              <p className="max-w-[340px] text-[12px] leading-[1.65] text-[#50645a]">
                <span className="font-bold text-[#25473b]">Desarrollado por Jarvistudio</span>
                <span> - Desarrollo de aplicaciones móviles y soluciones tecnológicas</span>
              </p>
            </div>
            <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-[11px] leading-relaxed">
              <dt className="font-bold text-[#617167]">Empresa</dt>
              <dd className="text-[#50645a]">Jarvistudio</dd>
              <dt className="font-bold text-[#617167]">Categoría</dt>
              <dd className="text-[#50645a]">Empresa de Tecnología e Información</dd>
              <dt className="font-bold text-[#617167]">Ubicación</dt>
              <dd className="text-[#50645a]">Guatemala</dd>
            </dl>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[.14em] text-[#617167]">Enlaces y contacto</h2>
            <nav className="mt-4 flex flex-col items-start gap-3 text-[12px] font-semibold text-[#285342]" aria-label="Enlaces del pie de página">
              <a href={legalUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Políticas de Privacidad</a>
              <a href={legalUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Términos de Uso</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
                <WhatsAppIcon /> Atención por WhatsApp
              </a>
            </nav>
          </div>
        </div>
        <div className="border-t border-[#d7d6c8]">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-4 text-[10px] text-[#7f887e] sm:flex-row sm:items-center sm:justify-between md:px-10">
            <span>© {new Date().getFullYear()} Mi Negocio App · Jarvistudio · Guatemala</span>
            <span>Las imágenes muestran pantallas reales de Mi Negocio App.</span>
          </div>
        </div>
      </footer>
      </main>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="¿Tienes dudas? Escríbenos por WhatsApp"
        className="fixed bottom-4 right-4 z-50 inline-flex max-w-[calc(100vw-2rem)] items-center gap-2.5 rounded-full bg-[#128c4c] px-4 py-3 text-[11px] font-bold leading-tight text-white shadow-[0_10px_28px_rgba(18,140,76,.28)] transition hover:-translate-y-0.5 hover:bg-[#0f7c42] sm:bottom-6 sm:right-6 sm:gap-3 sm:px-5 sm:py-3.5 sm:text-[13px]"
      >
        <WhatsAppIcon />
        <span>¿Tienes dudas? Escríbenos por WhatsApp</span>
      </a>
    </>
  );
}

export default App;
