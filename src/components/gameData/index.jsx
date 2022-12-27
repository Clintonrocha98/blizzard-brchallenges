import diabloiv from "../../assets/icons-games/diabloIV.webp";
import hearthstone from "../../assets/icons-games/hearthstone.webp";
import wow from "../../assets/icons-games/wow.webp";
import starcraftIcon from "../../assets/icons-games/starcraft-icon.webp";
import immortalIcon from "../../assets/icons-games/diablo-immortal-icon.webp";

import diabloivLogo from "../../assets/logo-game/diabloIV.webp";
import hearthstoneLogo from "../../assets/logo-game/hearthstone.webp";
import wowLogo from "../../assets/logo-game/wow.webp";
import starcraftLogo from "../../assets/logo-game/starcraft-logo.webp";
import immortalLogo from "../../assets/logo-game/diablo-immortal-logo.webp";

import diablogiff from "../../assets/giff-games/diabloIV-giff.gif";
import hearthstonegiff from "../../assets/giff-games/hearthstone-giff.gif";
import wowgiff from "../../assets/giff-games/wow-giff.gif";
import starcraftGif from "../../assets/giff-games/starcraft-gif.gif";
import immortalGif from "../../assets/giff-games/diablo-immortal-giff.gif";

import diabloivstatic from "../../assets/static-games/diabloIV-static.webp";
import hearthstonestatic from "../../assets/static-games/hearthstone-static.webp";
import wowstatic from "../../assets/static-games/wow-static.webp";
import starcraftstatic from '../../assets/static-games/starcarftstatic.webp';
import immortalStatic from "../../assets/static-games/diablo-immortal-static-gif.webp";

import diabloivbg from "../../assets/background/bg-diablo.webp";
import hearthstonebg from "../../assets/background/bg-hearthstone.webp";
import wowbg from "../../assets/background/bg-lk.webp";
import starcraftbg from "../../assets/background/starcraft-background.webp";
import immortalbg from "../../assets/background/diablo-immortal-background.webp";

const gameData = [
    {
        id: 0,
        name: "DiabloIV",
        title: "Retorna à escuridão com o game Diablo IV",
        description:
            "O retorno de Lilith traz uma era de escuridão e sofrimento",
        btntext: "Jogue agora",
        icon: diabloiv,
        logo: diabloivLogo,
        giff: diablogiff,
        static: diabloivstatic,
        bg: diabloivbg,
    },
    {
        id: 1,
        name: "Hearthstone",
        title: "Novo pacote de expansão de Hearthstone",
        description:
            "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
        btntext: "Reserve agora na pré-venda",
        icon: hearthstone,
        logo: hearthstoneLogo,
        giff: hearthstonegiff,
        static: hearthstonestatic,
        bg: hearthstonebg,
    },
    {
        id: 2,
        name: "WOW",
        title: "Desbrave as Terras Sombrias em Shadowlands!",
        description: "O que jaz além do mundo que você conhece?",
        btntext: "Reserve agora na pré-venda",
        icon: wow,
        logo: wowLogo,
        giff: wowgiff,
        static: wowstatic,
        bg: wowbg,
    },
    {
        id: 3,
        name: "Diablo Immortal",
        title: "Um capítulo inédito na saga de Diablo",
        description:
            "O arcanjo Tyrael está supostamente morto, e cabe à humanidade lidar com as consequências das ações dele.",
        btntext: "Jogue agora",
        icon: immortalIcon,
        logo: immortalLogo,
        giff: immortalGif,
        static: immortalStatic,
        bg: immortalbg,
    },
    {
        id: 4,
        name: "Starcraft 2",
        title: "Viva a experiência",
        description:
            "Guerra intergaláctica em uma campanha com história épica, competição multijogador de ponta e missões cooperativas.",
        btntext: "Jogue agora",
        icon: starcraftIcon,
        logo: starcraftLogo,
        giff: starcraftGif,
        static: starcraftstatic,
        bg: starcraftbg,
    },
];

export default gameData;
