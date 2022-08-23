<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
const getTimeAgo = (date) => {
    const now = moment().toDate();
    const then = moment(date, ['YYYY-MM-DD']).toDate();
    const diff = (now.getTime() + now.getTimezoneOffset() * 60000 - then.getTime()) / 1000;

    if (diff < 60) {			
        return `Few seconds ago`;			
    } else if (diff < 3600) {
        const minutes = Math.floor(diff / 60);
        return minutes === 1 ? `A minute ago` : `${minutes} minutes ago`;
    } else if (diff < 86400) {
        const hours = Math.floor(diff / 3600);
        return hours === 1 ? `An hour ago` : `${hours} hours ago`;			
    } else if (diff < 604800) {
        const days = Math.round(diff / 86400);
        return days === 1 ? `Yesterday` : `${days} days ago`;
    } else if (diff < 2592000) {
        const weeks = Math.round(diff / 604800);
        return weeks === 1 ? `Last week` : `${weeks} weeks ago`;
    } else if (diff < 31536000) {
        const months = Math.round(diff / 2592000);
        return months === 1 ? `Last month` : `${months} months ago`;
    } else {
        const years = Math.round(diff / 31536000);
        return years === 1 ? `Last year` : `${years} years ago`;
    }
}
console.log($scope.getTimeAgo('2012-03-20'))