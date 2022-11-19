export const RibbonSectionDivider = () => {
    return (
        <div className="ribbon-section-divider" />
    )
}

export const RibbonSection = ({cls, className, children}) => {
    return (
        <div className={[`ribbon-section`, cls, className].join(" ")}>
            {children}
        </div>
    )
}

export const RibbonSections = ({cls, className, children}) => {
    return (
        <div className={[`content-holder`, cls, className].join(" ")}>
            {children}
        </div>
    )
}