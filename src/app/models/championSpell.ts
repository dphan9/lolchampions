import Image from './image';

export default class ChampionSpell {
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    costType: string;
    description: string;
    image: Image;
    key: string;
    maxrank: number;
    name: string;
    range: any;
    rangeBurn: string;
    resource: string;
    sanitizedDescription: string;
    sanitizedTooltip: string;
    tooltip: string;
}