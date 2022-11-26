import diabloiv from "../../assets/icons-games/diabloIV.png";
import diabloivoff from "../../assets/icons-games/diabloIV-off.png";
import hearthstone from "../../assets/icons-games/hearthstone.png";
import hearthstoneoff from "../../assets/icons-games/hearthstone-off.png";
import wow from "../../assets/icons-games/wow.png";
import wowoff from "../../assets/icons-games/wow-off.png";

import diablooff from "../../assets/icons-games/diablo-off.png";
import starcraftoff from "../../assets/icons-games/starcraft-off.png";

import diabloivLogo from "../../assets/logo-game/diabloIV.png";
import hearthstoneLogo from "../../assets/logo-game/hearthstone.png";
import wowLogo from "../../assets/logo-game/wow.png";

import diablogiff from "../../assets/giff-games/diabloIV-giff.gif";
import hearthstonegiff from "../../assets/giff-games/hearthstone-giff.gif";
import wowgiff from "../../assets/giff-games/wow-giff.gif";

const gameData = [
    {
        name: "Diablo IV",
        title: "Retorna à escuridão com o game Diablo IV",
        description:
            "O retorno de Lilith traz uma era de escuridão e sofrimento",
        btntext: "Jogue agora",
        iconon: diabloiv,
        iconoff: diabloivoff,
        logo: diabloivLogo,
        giff: diablogiff,
    },
    {
        name: "Hearthstone",
        title: "Novo pacote de expansão de Hearthstone",
        description:
            "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
        btntext: "Reserve agora na pré-venda",
        iconon: hearthstone,
        iconoff: hearthstoneoff,
        logo: hearthstoneLogo,
        giff: hearthstonegiff,
    },
    {
        name: "WOW",
        title: "Desbrave as Terras Sombrias em Shadowlands!",
        description: "O que jaz além do mundo que você conhece?",
        btntext: "Reserve agora na pré-venda",
        iconon: wow,
        iconoff: wowoff,
        logo: wowLogo,
        giff: wowgiff,
    },
    {
        iconoff: diablooff,
    },
    {
        iconoff: starcraftoff,
    },
];

export default gameData;
