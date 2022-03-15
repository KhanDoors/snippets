import { CInputGroup, CInputGroupText, CLink, CInput } from "@coreui/react";
import Pagination from "components/common/pagination/Pagination";
import React, { useState, useEffect } from "react";
import searchIcon from "assets/icons/search.svg";

const releaseNotes = [
  {
    id: 1,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.google.com",
  },
  {
    id: 2,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
  {
    id: 3,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
  {
    id: 4,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
  {
    id: 5,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
  {
    id: 6,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.khandoor.com",
  },
  {
    id: 7,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
  {
    id: 8,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
  {
    id: 9,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
  {
    id: 10,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
  {
    id: 11,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.dallascowboys.com",
  },
  {
    id: 12,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
  {
    id: 13,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
  {
    id: 14,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
  {
    id: 15,
    date: "2020-01-01",
    title: "Release Notes",
    link: "www.portal.com",
  },
];

const ITEMS_PER_PAGE = 5;

const ReleaseNotes = () => {
  const [data, setData] = useState(releaseNotes);
  const [noOfPages, setNoOfPages] = useState(1);
  const [noOfRecords, setNoOfRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxLimit, setMaxLimit] = useState(5);
  const [minLimit, setMinLimit] = useState(0);
  const [searchText, setSearchText] = useState("");
  console.log(data);

  useEffect(() => {
    setNoOfPages(Math.ceil(data.length / maxLimit));
    setNoOfRecords(data.length);
    setMinLimit(0);
    setMaxLimit(5);
    setCurrentPage(1);
    // eslint-disable-next-line
  }, []);

  // search release notes
  // const searchdata = (e) => {
  //   const searchText = e.target.value
  //   const searchResult = data.filter(
  //     (releaseNote) =>
  //       releaseNote.title.toLowerCase().includes(searchText.toLowerCase()) ||
  //       releaseNote.date.toLowerCase().includes(searchText.toLowerCase()) ||
  //       releaseNote.link.toLowerCase().includes(searchText.toLowerCase())
  //   )
  //   setNoOfPages(Math.ceil(searchResult.length / maxLimit))
  //   setNoOfRecords(searchResult.length)
  //   setMinLimit(0)
  //   setMaxLimit(5)
  //   setCurrentPage(1)
  // }

  return (
    <div className="card-body">
      <CInputGroup style={{ width: "20rem", margin: "10px 0px" }}>
        <CInput
          type="text"
          name="data-search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          data-testid="data-search-input"
        />
        <CInputGroupText style={{ marginLeft: "5px", height: "35px" }}>
          <img src={searchIcon} alt="search icon" />
        </CInputGroupText>
      </CInputGroup>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Release Date</th>
              <th>Title</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
              )
              .map((releaseNote, index) => (
                <tr key={releaseNote.id}>
                  <td>{releaseNote.id}</td>
                  <td>{releaseNote.date}</td>
                  <td>{releaseNote.title}</td>
                  <td>
                    <CLink
                      href={`https://${releaseNote.link}`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {releaseNote.link}
                    </CLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="mt-4 d-flex justify-content-center">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            minLimit={minLimit}
            setMinLimit={setMinLimit}
            maxLimit={maxLimit}
            setMaxLimit={setMaxLimit}
            pageNumberLimit={5}
            noOfPages={noOfPages}
            noOfRecords={noOfRecords}
            hideItemsPerPageDropdown
          />
        </div>
      </div>
    </div>
  );
};

export default ReleaseNotes;
