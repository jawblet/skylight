
const Anchor = (props) => {
    return (
        <a href={props.to} 
            target="_blank"
            rel="noreferrer"
            className={props.className}>
            {props.children}
        </a>
    );
}
 
export default Anchor;