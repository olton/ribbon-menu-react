export const RibbonGroup = ({cls, className, children, title}) => {
    return (
        <div className={['group', cls, className].join(" ")}>
            {children}
            {title && (
                <span className="title">{title}</span>
            )}
        </div>
    )
}