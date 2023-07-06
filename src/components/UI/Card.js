//Card component will now act as a shell around expense .or expenseitem
import './Card.css'

function Card(props){
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
export default Card;
//children is a reserved name and the value of this reserved props will always be content  between opening and closing tag of your component
//So if you wanna make sure that a class name can be set

// on your card component and then has an effect,

// on your card component and then has an effect,

// we have to tweak the code in the card component.

// And here we would probably wanna tweak it

// such that we add whatever is set as a class name on card

// such that we add whatever is set as a class name on card

// to this class name string, we're setting as a class name

// on that div.

// on that div.

// So here we could add a classes constant

// which is

// card as a default class

// which is always applied,

// white space

// plus

// props.className.

// So now anything we receive as a class name from outside

// is added to that string.

// And here we can then dynamically point

// at this class, this constant.