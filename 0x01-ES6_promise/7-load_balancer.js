export default function loadBalancer(chinaDownload, USDownload) {
  Promise.any([ChinaDownload, USDownload]).then(function(result) {
    return result
  };
}
