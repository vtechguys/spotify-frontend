import React from 'react';

const ListItem = (props)=>{

    let listItemImageJSX = null;
    if(props.image){
        listItemImageJSX = (
            <div>
                <img src={props.image} alt={props.imageAlt} />
            </div>
        )
    }

    let listItemJSX = null;
    if(props.title){
        listItemJSX = (
            <div onClick={()=>props.click(props.programId)}>
                { listItemImageJSX }
                {/* ListItem JSX */}
                <div>
                    <h4>{ props.title }</h4>
                    <div>
                        <p>
                            {props.contentTop}
                        </p>
                        <p> 
                        {
                            props.contentBottom
                        }</p>
                        <p>
                            {
                                props.contentRight
                            }
                        </p>
                    </div>
                </div>


            </div>
        )
    }

}

export default ListItem;