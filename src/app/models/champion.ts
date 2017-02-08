import ChampionSpell from './championSpell';
import Image from './image';
import Info from './info';
import Passive from './passive';
import Recommended from './recommended';
import Skin from './skin';
import Stats from './stats';

export default class Champion {
    allytips: string[];
    blurb: string;
    enemytips: string[];
    id: number;
    image: Image;
    info: Info;
    key: string;
    lore: string;
    name: string;
    partype: string;
    passive: Passive;
    recommended: Recommended[];
    skins: Skin[];
    spells: ChampionSpell[];
    stats: Stats;
    tags: string[];
    title: string;
}

