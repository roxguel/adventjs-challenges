function calculateTime(deliveries) {
    let time = -25200;

    for (let delivery of deliveries) {
        time += (+delivery.substring(0, 2) * 3600)
            + (+delivery.substring(3, 5) * 60)
            + (+delivery.substring(6, 8));
    }

    if (time < 0) {
        return '-' + new Date(time * -1000).toJSON().substring(11, 19);
    }

    return new Date(time * 1000).toJSON().substring(11, 19);
}