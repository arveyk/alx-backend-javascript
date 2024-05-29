export default function loadBalancer(chinaDownload, USDownload) {
  Promise.any([chinaDownload, USDownload]).then((result) => {
    return result;
  });
}
