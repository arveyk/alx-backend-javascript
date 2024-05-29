export default function loadBalancer(chinaDownload, USDownload) {
  Promise.any([chinaDownload, USDownload]).then(function(result) {
    return result;
  });
}
