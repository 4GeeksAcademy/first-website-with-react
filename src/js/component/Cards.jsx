import React from 'react';

function Cards() {
    return (
        <div className="container px-4 pb-4">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {[1, 2, 3, 4].map((num) => (
                    <div className="col" key={num}>
                        <div className="card h-100">
                            <img src="https://placehold.co/500x325" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text fw-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                            </div>
                            <div className="card-footer bg-transparent border-top-0">
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards