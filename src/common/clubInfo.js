import enumList from "./commonEnum";
const { attribute } = enumList;

const clubInfo = [
  {
    no: 7,
    duration: {
      start: '2024-03-20',
      end: '2024-03-27',
    },
    enemies: {
      red: {
        title: "一般討伐",
        name: "厄運轉輪",
        attribute: attribute.red,
        skills: {
          Sp: "按176%攻擊力，對敵方單體造成傷害，並對目標施加「恐懼」3回合",
          Active: [
            "按120%攻擊力，對敵方單體造成傷害",
            "降低敵方單體30%爆擊率3回合",
          ]
        },
        basicValues: {
          HP: 4451400,
          ATK: 3180,
          DEF: 1060,
        },
        delta: {
          HP: 1100400,
          ATK: 786,
          DEF: 262,
        },
      },
      green: {
        title: "一般討伐",
        name: "警覺鍵盤鹿",
        attribute: attribute.green,
        skills: {
          Sp: "按126%攻擊力，對敵方全體造成「弱點傷害」",
          Active: [
            "按96%攻擊力，對敵方單體造成傷害，並對目標施加2層「鏽刃」3回合",
            "按120%攻擊力，對敵方單體造成傷害",
            "按300%攻擊力，對自身施加護盾3回合",
          ]
        },
        basicValues: {
          HP: 4451400,
          ATK: 3180,
          DEF: 1060,
        },
        delta: {
          HP: 1100400,
          ATK: 786,
          DEF: 262,
        },
      },
      blue: {
        title: "一般討伐",
        name: "怪鳥時鐘",
        attribute: attribute.blue,
        skills: {
          Sp: "按207%攻擊力，對敵方單體造成傷害",
          Active: [
            "按120%攻擊力，對敵方單體造成傷害",
            "按72%攻擊力，對敵方全體造成傷害，並對受到傷害的目標施加「點燃」3回合",
          ],
        },
        basicValues: {
          HP: 4451400,
          ATK: 3180,
          DEF: 1060,
        },
        delta: {
          HP: 1100400,
          ATK: 786,
          DEF: 262,
        },
      },
      white: {
        title: "特級討伐",
        name: "躁狂遊戲機",
        attribute: attribute.light,
        skills: {
          Sp: "按141%攻擊力，對全體造成「爆裂傷害」",
          Active: [
            "按94%攻擊力，對敵方單體造成「破盾傷害」",
            "按90%攻擊力，對敵方全體造成傷害，並驅散自身所有減益",
            "按72%攻擊力，造成單體傷害，並驅散目標所有增益",
          ],
          Passive: "50層防禦力提升，每受到一段傷害減少一層。效果消失時，重置被動，並按照攻擊者500%攻擊力受到一次「純粹傷害」"
        },
        basicValues: {
          HP: 4875500,
          ATK: 3180,
          DEF: 1060,
        },
        delta: {
          HP: 1205200,
          ATK: 786,
          DEF: 262,
        },
      }
    }
  }
]

export default clubInfo
