// Best Times to Post Collector
document.getElementById('get-analytics').onclick = function() {
    document.getElementById('analytics-result').textContent = 'Fetching analytics... (functionality coming soon)';
};












// Hastag Collector
document.getElementById('category-select').onchange = function() {
    document.getElementById('hashtags-section').textContent = 'Loading hashtags for ' + this.value + '... (functionality coming soon)';
};
