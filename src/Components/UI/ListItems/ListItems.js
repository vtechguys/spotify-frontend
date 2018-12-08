import React from 'react';

import ListItem from './ListItem/ListItem';


const ListItems = (props) =>{
    let listItemsJSX = null;

    if(props.listItems.length>0){
        listItemsJSX = props.listItems.map(listItem=>{
            return (
                <ListItem
                    title={ listItem.title }
                    contentTop={ listItem.programCode }
                    contentBottom={ listItem.description }
                    contentRight = { listItem.span }
                    key={ listItem.programId }
                    clicked={ props.click }
                >

                </ListItem>
            )
        });
    }

    return listItemsJSX;

}
export default ListItems;