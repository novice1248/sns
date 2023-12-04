import { Navigate } from "react-router-dom";
import classes from "../css modules/club-list.module.scss"
import club1 from "../images/club1.png";
import club2 from "../images/club2.png";
import club3 from "../images/club3.png";
import club4 from "../images/club4.png";
import club5 from "../images/club5.png";
import img from "../images/img.jpg";

export const ClubList = () => {
  const onclick = () => {
    return<Navigate to={`/sns/club-list/Club1`} />;
  }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>サークル一覧</title>
      <body className={classes.body}>
        <h1 className={classes.h1}>サークル一覧</h1>
        <h3>気になっているサークル一をクリックして、皆さんと話しましょう。</h3>
        <div className={classes.clubContainer}>
          <div className={classes.club} onClick={() => onclick() }>
            <img src={club1} alt="Club 1 Image" />
            <div className={classes.clubName}>競技プログラミング部</div>
            <div className={classes.clubDescription}>
              競技プログラミング部はアルゴリズムの魅力に没頭。メンバーは論理思考を鍛え、コーディングスキル向上を追求し、競技大会で切磋琢磨する熱心なグループです。
            </div>
          </div>
          <div className={classes.club}>
            <img src={club2} alt="Club 2 Image" />
            <div className={classes.clubName}>野球部</div>
            <div className={classes.clubDescription}>
              野球部は熱い戦いとチームワーク。練習と試合で成長し、友情と競技魂を共有します。
            </div>
          </div>
          <div className={classes.club}>
            <img src={club3} alt="Club 3 Image" />
            <div className={classes.clubName}>アニメ研究室</div>
            <div className={classes.clubDescription}>
              アニメ研究室はアニメ愛好者が集い、作品鑑賞や制作活動を通じて交流。創造性とオタク文化の追求に熱中。
            </div>
          </div>
          <div className={classes.club}>
            <img src={club4} alt="Club 4 Image" />
            <div className={classes.clubName}>大学サッカー協会</div>
            <div className={classes.clubDescription}>
              大学サッカー協会は熱狂的なサッカーファンが集まり、練習と試合でスキル向上。仲間との結束を大切にし、スポーツマンシップを重んじます。
            </div>
          </div>
          <div className={classes.club}>
            <img src={club5} alt="Club 5 Image" />
            <div className={classes.clubName}>美術部</div>
            <div className={classes.clubDescription}>
              美術部は創造性溢れ、様々な表現を追求。絵画や彫刻などで才能を磨き、アート愛好者が集い、共に魅力を追究します。
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
