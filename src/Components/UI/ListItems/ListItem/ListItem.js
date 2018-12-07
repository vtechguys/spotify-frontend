import React from 'react';

const ListItem = (props)=>{

    let listItemImageJSX = null;
    if(props.image){
        listItemImageJSX = (
            <div>
                <img src={porps.image} alt={props.imageAlt} />
            </div>
        )
    }

    let listItemJSX = null;
    if(porps.title){
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
                                porps.contentRight
                            }
                        </p>
                    </div>
                </div>


            </div>
        )
    }

}

