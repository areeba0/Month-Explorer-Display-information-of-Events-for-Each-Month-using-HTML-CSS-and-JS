const data = {
    "January": {
        "image": "https:\/\/newyearseveblog.com\/wp-content\/uploads\/2021\/06\/Shanghai-NYE-fireworks.png",
        "data": {
            "temperature": "10\u00b0C",
            "precipitation": "20mm",
            "humidity": "50%",
            "events": "New Years Eve 2024 (January 1)",
            "Date": "January 1"
        }
    },
    "February": {
        "image": "https:\/\/i.pinimg.com\/564x\/1a\/30\/6a\/1a306a74ec652940674f9f0f3024c320.jpg",
        "data": {
            "temperature": "8\u00b0C",
            "precipitation": "15mm",
            "humidity": "45%",
            "events": "Valentine's Day (February 14)",
            "Date": "February 14"
        }
    },
    "March": {
        "image": "https:\/\/i.pinimg.com\/236x\/b5\/36\/88\/b5368836c6d1dd39472948ff19f689b4.jpg",
        "data": {
            "temperature": "12\u00b0C",
            "precipitation": "18mm",
            "humidity": "48%",
            "events": "Pakistan Day (March 23)",
            "Date": "March 23"
        }
    },
    "April": {
        "image": "https://www.thestreet.com/.image/t_share/MTY3NTM5NDQ5MDA5MzUwNTQy/what-is-the-history-of-april-fools-day.png",
        "data": {
            "temperature": "15\u00b0C",
            "precipitation": "12mm",
            "humidity": "45%",
            "events": "April Fools Day (April 1)",
            "Date": "April 1"
        }
    },
    "May": {
        "image": "https:\/\/i1.wp.com\/img.jagranjosh.com\/images\/2023\/May\/152023\/internationall-labour-day.jpg",
        "data": {
            "temperature": "20\u00b0C",
            "precipitation": "10mm",
            "humidity": "40%",
            "events": "Labour Day (May 1)",
            "Date": "May 1"
        }
    },
    "June": {
        "image": "https:\/\/i.pinimg.com\/564x\/34\/c5\/21\/34c52178c8556cedf0ca55263e837386.jpg",
        "data": {
            "temperature": "25\u00b0C",
            "precipitation": "8mm",
            "humidity": "35%",
            "events": "Father's Day (June 20)",
            "Date": "June 20"
        }
    },
    "July": {
        "image": "https:\/\/www.desicomments.com\/dc4\/01\/457581\/4575811.jpg",
        "data": {
            "temperature": "28\u00b0C",
            "precipitation": "5mm",
            "humidity": "30%",
            "events": "national video game day (july 8)",
            "Date": "July 8"
        }
    },
    "August": {
        "image": "https:\/\/i.pinimg.com\/564x\/8d\/54\/69\/8d54693f3b89d3f9ba42559080066402.jpg",
        "data": {
            "temperature": "27\u00b0C",
            "precipitation": "6mm",
            "humidity": "32%",
            "events": "Independence Day (August 14)",
            "Date": "August 14"
        }
    },
    "September": {
        "image": "https://static.vecteezy.com/system/resources/previews/002/162/041/non_2x/21-september-international-peace-day-free-vector.jpg",
        "data": {
            "temperature": "23\u00b0C",
            "precipitation": "8mm",
            "humidity": "40%",
            "events": "international day of peace (September 21)",
            "Date": "September 21"
        }
    },
    "October": {
        "image": "https:\/\/i.pinimg.com\/564x\/e8\/0b\/68\/e80b6827d6236a283312b849fcacb6ac.jpg",
        "data": {
            "temperature": "18\u00b0C",
            "precipitation": "10mm",
            "humidity": "45%",
            "events": "Columbus Day (October 14)",
            "Date": "October 14"
        }
    },
    "November": {
        "image": "https:\/\/img.freepik.com\/premium-vector\/iqbal-day-9-november_743107-12.jpg",
        "data": {
            "temperature": "13\u00b0C",
            "precipitation": "15mm",
            "humidity": "48%",
            "events": "Iqbal day (November 9)",
            "Date": "November 9"
        }
    },
    "December": {
        "image": "https:\/\/i.pinimg.com\/564x\/6f\/a0\/52\/6fa052f58560016dd1c3467bffb0ef93.jpg",
        "data": {
            "temperature": "8\u00b0C",
            "precipitation": "20mm",
            "humidity": "50%",
            "events": "Quaid e Azam day( December 25 )",
            "Date": "December 25"
        }
    }
};

function viewSelectedMonths() {
    const checkboxes = document.querySelectorAll('input[name="month"]:checked');
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    checkboxes.forEach(checkbox => {
        const month = checkbox.value;
        const tile = createTile(month, data[month].image, data[month].data);
        outputDiv.appendChild(tile);
    });
}

function createTile(month, imageUrl, monthData) {
    const tileDiv = document.createElement("div");
    tileDiv.classList.add("tile");

    const image = document.createElement("img");
    image.src = imageUrl;
    tileDiv.appendChild(image);

    const monthName = document.createElement("h3");
    monthName.textContent = month;
    tileDiv.appendChild(monthName);

    const dataList = document.createElement("ul");
    for (const [key, value] of Object.entries(monthData)) {
        const listItem = document.createElement("li");
        listItem.textContent = `${key}: ${value}`;
        dataList.appendChild(listItem);
    }
    tileDiv.appendChild(dataList);

    return tileDiv;
}

document.querySelector('input[name="viewOption"]').addEventListener('change', function() {
    const monthSelector = document.getElementById("monthSelector");
    if (this.value === "single") {
        monthSelector.style.display = "block";
    } else {
        monthSelector.style.display = "none";
        viewSelectedMonths();
    }
});
