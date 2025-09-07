import style from "./index.module.scss";

export default function SocialIcons() {
  return (
    <div className={style.links}>
      <a style={{ "--color": "#0088cc" } as React.CSSProperties} href="https://t.me/tarasovamaths">
        <i className="bx bxl-telegram" />
      </a>
      <a style={{ "--color": "#25D366" } as React.CSSProperties} href="https://wa.me/79308815930">
        <i className="bx bxl-whatsapp" />
      </a>
      <a
        style={{ "--color": "#355C7D" } as React.CSSProperties}
        href="https://vk.com/tarasova_maths"
      >
        <i className="bx bxl-vk" />
      </a>
      <a
        style={{ "--color": "#FF0000" } as React.CSSProperties}
        href="https://www.youtube.com/@tarasova_maths"
      >
        <i className="bx bxl-youtube" />
      </a>
    </div>
  );
}
