import { ExpressionType } from './utils';
import { SupportedHTMLElements } from './constants/domElements';
import { DefineSetupFnComponent, PublicProps, SlotsType } from 'vue';

interface IProps {
    as?: SupportedHTMLElements;
}
type ComponentCustomProps = PublicProps & {
    styled: boolean;
};
export type StyledComponentType = DefineSetupFnComponent<IProps, any, SlotsType, any, ComponentCustomProps>;
type StyledFactory = (styles: TemplateStringsArray, ...expressions: (ExpressionType | ExpressionType[])[]) => StyledComponentType;
type StyledComponent = StyledFactory & {
    attrs: <T extends Record<string, unknown>>(attrs: T) => StyledFactory;
};
declare function baseStyled(target: string | InstanceType<any>, propsDefinition?: Record<string, unknown>): StyledComponent;
/** Append all the supported HTML elements to the styled properties */
declare const styled: typeof baseStyled & {
    object: StyledComponent;
    div: StyledComponent;
    a: StyledComponent;
    abbr: StyledComponent;
    address: StyledComponent;
    area: StyledComponent;
    article: StyledComponent;
    aside: StyledComponent;
    audio: StyledComponent;
    b: StyledComponent;
    base: StyledComponent;
    bdi: StyledComponent;
    bdo: StyledComponent;
    blockquote: StyledComponent;
    body: StyledComponent;
    br: StyledComponent;
    button: StyledComponent;
    canvas: StyledComponent;
    caption: StyledComponent;
    cite: StyledComponent;
    code: StyledComponent;
    col: StyledComponent;
    colgroup: StyledComponent;
    data: StyledComponent;
    datalist: StyledComponent;
    dd: StyledComponent;
    del: StyledComponent;
    details: StyledComponent;
    dfn: StyledComponent;
    dialog: StyledComponent;
    dl: StyledComponent;
    dt: StyledComponent;
    em: StyledComponent;
    embed: StyledComponent;
    fieldset: StyledComponent;
    figcaption: StyledComponent;
    figure: StyledComponent;
    footer: StyledComponent;
    form: StyledComponent;
    h1: StyledComponent;
    h2: StyledComponent;
    h3: StyledComponent;
    h4: StyledComponent;
    h5: StyledComponent;
    h6: StyledComponent;
    head: StyledComponent;
    header: StyledComponent;
    hgroup: StyledComponent;
    hr: StyledComponent;
    html: StyledComponent;
    i: StyledComponent;
    iframe: StyledComponent;
    img: StyledComponent;
    input: StyledComponent;
    ins: StyledComponent;
    kbd: StyledComponent;
    label: StyledComponent;
    legend: StyledComponent;
    li: StyledComponent;
    link: StyledComponent;
    main: StyledComponent;
    map: StyledComponent;
    mark: StyledComponent;
    menu: StyledComponent;
    meta: StyledComponent;
    meter: StyledComponent;
    nav: StyledComponent;
    noscript: StyledComponent;
    ol: StyledComponent;
    optgroup: StyledComponent;
    option: StyledComponent;
    output: StyledComponent;
    p: StyledComponent;
    picture: StyledComponent;
    pre: StyledComponent;
    progress: StyledComponent;
    q: StyledComponent;
    rp: StyledComponent;
    rt: StyledComponent;
    ruby: StyledComponent;
    s: StyledComponent;
    samp: StyledComponent;
    script: StyledComponent;
    section: StyledComponent;
    select: StyledComponent;
    small: StyledComponent;
    source: StyledComponent;
    span: StyledComponent;
    strong: StyledComponent;
    style: StyledComponent;
    sub: StyledComponent;
    summary: StyledComponent;
    sup: StyledComponent;
    table: StyledComponent;
    tbody: StyledComponent;
    td: StyledComponent;
    textarea: StyledComponent;
    tfoot: StyledComponent;
    th: StyledComponent;
    thead: StyledComponent;
    time: StyledComponent;
    title: StyledComponent;
    tr: StyledComponent;
    track: StyledComponent;
    u: StyledComponent;
    ul: StyledComponent;
    var: StyledComponent;
    video: StyledComponent;
    wbr: StyledComponent;
    big: StyledComponent;
    keygen: StyledComponent;
    menuitem: StyledComponent;
    param: StyledComponent;
    circle: StyledComponent;
    clipPath: StyledComponent;
    defs: StyledComponent;
    ellipse: StyledComponent;
    g: StyledComponent;
    image: StyledComponent;
    line: StyledComponent;
    linearGradient: StyledComponent;
    mask: StyledComponent;
    path: StyledComponent;
    pattern: StyledComponent;
    polygon: StyledComponent;
    polyline: StyledComponent;
    radialGradient: StyledComponent;
    rect: StyledComponent;
    stop: StyledComponent;
    svg: StyledComponent;
    text: StyledComponent;
    tspan: StyledComponent;
};
export { styled };
