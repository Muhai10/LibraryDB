import React from 'react';

const Pagination = (props) => {
    const page_links = [];
    for(let i=1; i<=props.totalPages; i++){
        let isActive;
        if(props.CurrentPage === i){
            isActive = "active";
        }else {
            isActive = "";
        }

        let classes="wave-effect "+isActive;
        page_links.push(<button className={classes} key={i} onClick={()=>{
            props.nextPage(i);
        }}>{i}</button>)
    }
    return(
        <div className="container" style={{alignSelf:"center"}}>
            <div className="row" style={{alignSelf:"center"}}>{page_links}</div>
        </div>
    );
};

export default Pagination;
