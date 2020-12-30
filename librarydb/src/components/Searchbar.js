import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="container">
            <div className='row'>
                <section className="col s6 offset-s3">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className='input-field'>
                            <input placeholder="Enter Book name" type="text" onChange={props.handleChange}></input>
                        </div>
                        <div className="row s4 pull-s1">
                            <select color="black" className="browser-default dropdown select-css" defaultValue="Sort" onChange={props.handleSort}>
                                <option disabled value="Sort">Sort By</option>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                                <option value="Ascending">A-Z</option>
                                <option value="Descending">Z-A</option>
                            </select>
                        </div>
                    </form>
                </section>

            </div>
        </div >

    )
}

export default SearchBar;
