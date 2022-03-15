import { CContainer } from "@coreui/react";
import DownloadPageContext from "components/common/Context/DownloadPageContext";
import { NoData } from "components/common/noData";
import {
  getReleaseNotesClient,
  getReleaseNotesInternal,
} from "extensions/usoc/api/releaseNotes";
import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { addAuthToken, useExtension, useUserAuth } from "utils";

import ReleaseNotesClient from "../components/ReleaseNotesClient";
import ReleaseNotesInternal from "../components/ReleaseNotesInternal";

async function fetchReleaseNotesClient(auth, extension) {
  const host = extension?.config?.env?.clientApiGateway?.URL;
  if (host === undefined) throw new Error("No api hostname specified.");
  const results = await getReleaseNotesClient({ auth, host });
  return results;
}

async function fetchReleaseNotesInternal(auth, extension) {
  const host = extension?.config?.env?.clientApiGateway?.URL;
  if (host === undefined) throw new Error("No api hostname specified.");
  const results = await getReleaseNotesInternal({ auth, host });
  return results;
}

export default function ReleaseNotes() {
  const auth = useUserAuth();
  const extension = useExtension();

  const userRole = useSelector((state) => {
    return state.user.role;
  });

  const { data: releasenotesinternal } = useSWR(
    () => addAuthToken("/itsm/internal/get_kb_article_html"),
    () => fetchReleaseNotesInternal(auth, extension),
    { suspense: true }
  );

  const { data: releasenotesclient } = useSWR(
    () => addAuthToken("/itsm/client/get_kb_article_html"),
    () => fetchReleaseNotesClient(auth, extension),
    { suspense: true }
  );

  const { setId } = useContext(DownloadPageContext);

  const parseRawHtml = (rawHtml) => {
    return rawHtml?.data?.content.replace("\\", "");
  };

  useEffect(() => {
    setId("release-notes");
  }, [setId]);

  if (
    userRole === "Portal-Admin" ||
    "Portal-User" ||
    "Non-CMS-User-ITIL" ||
    "Non-CMS-User"
  )
    return (
      <div id="release-notes">
        <CContainer>
          {releasenotesinternal ? (
            <ReleaseNotesInternal
              releaseNotesURI={parseRawHtml(releasenotesinternal)}
            />
          ) : (
            <NoData
              className="h-100 row table-row"
              text="No Release Notes available at the moment"
            />
          )}
        </CContainer>
      </div>
    );

  if (userRole === "Portal-Client")
    return (
      <div id="release-notes">
        <CContainer>
          {releasenotesclient ? (
            <ReleaseNotesClient
              releaseNotesURI={parseRawHtml(releasenotesclient)}
            />
          ) : (
            <NoData
              className="h-100 row table-row"
              text="No Release Notes available at the moment"
            />
          )}
        </CContainer>
      </div>
    );

  // if (userRole === "Portal-Client") {
  //   return (
  //     <div id="release-notes">
  //       <CContainer>
  //         {releasenotesclient ? (
  //           <ReleaseNotesClient
  //             releaseNotesURI={parseRawHtml(releasenotesclient)}
  //           />
  //         ) : (
  //           <NoData
  //             className="h-100 row table-row"
  //             text="No Release Notes available at the moment"
  //           />
  //         )}
  //       </CContainer>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div id="release-notes">
  //       <CContainer>
  //         {releasenotesinternal ? (
  //           <ReleaseNotesInternal
  //             releaseNotesURI={parseRawHtml(releasenotesinternal)}
  //           />
  //         ) : (
  //           <NoData
  //             className="h-100 row table-row"
  //             text="No Release Notes available at the moment"
  //           />
  //         )}
  //       </CContainer>
  //     </div>
  //   )
  // }
}
