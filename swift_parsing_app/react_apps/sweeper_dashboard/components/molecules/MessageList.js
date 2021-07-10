// External imports
import React, {useState, useEffect} from 'react';
import ReactPaginate from "react-paginate";
// import classNames from 'classnames';
import {SourceFileList} from '../molecules'
import {truncate} from "../../../utils";
import {MessageRow} from "../atoms";

// Assets

export function MessageList(props) {

    const {swiftMessageList, setPageNumber, totalPageCtn} = props

    const changePage = ({selected}) => {
        // this component indexes from 0 so first page has index 0, that's why we increase by one to get real number
        const realPageNumber = selected + 1
        setPageNumber(realPageNumber);
        console.log(realPageNumber);
    };

    return (
        <>
            <div className="card">
                <div className="card-header border-0">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="mb-0">File Content</h3>
                        </div>
                        <div className="col">
                            <ul className="nav nav-pills flex-column flex-sm-row" id="tabs-text" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-text-1-tab" data-toggle="tab"
                                   href="#tabs-text-1" role="tab" aria-controls="tabs-text-1" aria-selected="true">Meta
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-2-tab" data-toggle="tab"
                                   href="#tabs-text-2" role="tab" aria-controls="tabs-text-2"
                                   aria-selected="false">Content
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-3-tab" data-toggle="tab"
                                   href="#tabs-text-3" role="tab" aria-controls="tabs-text-3"
                                   aria-selected="false">Content - Detail
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                        <tr>
                            <th scope="col">Ref ID</th>
                            <th scope="col">Ref ID</th>
                            <th scope="col">Transaction Id</th>
                            <th scope="col">Field</th>
                            <th scope="col">Values</th>
                        </tr>
                        </thead>
                        <tbody>
                        {swiftMessageList.map((message) =>
                            <MessageRow message={message}/>
                        )}
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ReactPaginate
                            previousLabel={<> <i className="fa fa-angle-left"></i>
                                <span className="sr-only">Previous</span></>}
                            nextLabel={<>  <i className="fa fa-angle-right"></i>
                                <span className="sr-only">Next</span></>}
                            pageCount={totalPageCtn}
                            onPageChange={changePage}
                            containerClassName={"pagination justify-content-center"}
                            pageClassName={'page-item'}
                            breakClassName={'page-item'}
                            previousClassName={'page-item'}
                            nextClassName={'page-item'}
                            pageLinkClassName={"page-link"}
                            breakLinkClassName={"page-link"}
                            previousLinkClassName={"page-link"}
                            nextLinkClassName={"page-link"}
                            disabledClassName={"disabled"}
                            activeClassName={"active"}/>
                    </nav>

                </div>
            </div>
        </>
    );
}