
let country_states = [
    {
        country: "Telangana",
        code: "TS",
        states: ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Hanamkonda", "Jagtial", "Jangaon", "Jayashankar Bhupalapally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "mulugu", "Medchal-Malkajgiri", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"]
    },
    {
        country: "Andhra Pradesh",
        code: "AP",
        states: ["Annamayya", "Anantapur", "Alluri Sitharama Raju", "Anakapalli", "Bapatla", "Chittoor", "Dr. B. R. Ambedkar Konaseema", "East Godavari", "Eluru", "Guntur", "Kurnool", "Krishna", "Kakinada", "Nandyal", "NTR", "Parvathipuram Manyam", "Palnadu", "Prakasam", "Sri Potti Sriramulu Nellore", "Srikakulam", "Sri Sathya Sai", "Tirupati", "Vizianagaram", "Visakhapatnam", "West Godavari", "YSR"]

    },
    {
        country: "Tamil Nadu",
        code: "TN",
        states: ["England", "Scotland", "Wales"]
    }
]

let countrySelect = document.querySelector('#countries');
let stateSelect = document.querySelector('#states');

countrySelect.onchange = function () {
    stateSelect.options.length = 0;
    if (countrySelect.value !== "-1") {
        for (const country of country_states) {
            if (countrySelect.value === country.code) {
                let states = country.states;
                let op = document.createElement('option');
                op.value = "-1";
                op.innerText = "Select State";
                stateSelect.appendChild(op);
                for (const state of states) {
                    let op = document.createElement('option');
                    op.value = state;
                    op.innerText = state;
                    stateSelect.appendChild(op);
                }
            }
        }
    }
}
// JavaScript to display all lawyers' information based on the selected domain
const domainSelect = document.getElementById('domain');
const lawyerInfo = document.getElementById('lawyer-info');
const lawyersList = document.getElementById('lawyers-list');
const submitButton = document.getElementById('submit-button');

const lawyers = {
    criminal: [
        { name: 'Gangaraju', location: 'Visakhapatnam', contact: 'Gangaraju@gmail.com', exp: 14 },
        { name: 'Mukkamala Gouripathi Sastry', location: ' West Godavari', contact: 'Mukkamala Gouripathi Sastry@gmail.com' },
        { name: 'Ganga Venu Gopala Krishna', location: 'East Godavari', contact: 'alice@gmail.com', exp: 14 },
        { name: 'R.Kalyani', location: 'Vijayawada', contact: 'Kalyani@gmail.com', exp: 14 },
        { name: 'Kandarapu Subramanyam', location: 'Rajahmundry', contact: 'Kandarapu@gmail.com', exp: 14 },
        { name: 'k.shanker', location: 'East Godhavari', contact: 'shanker@gmail.com', exp: 14 },
        { name: 'A.gopi', location: 'Hyderabad', contact: 'gopi@gmail.com', exp: 14 },
        { name: 'SRINIVAS GOPISETY', location: 'West Godavari', contact: 'GOPISETY@gmail.com', exp: 14 },
        { name: 'Ganga Venu Gopala Krishna', location: 'East Godavari', contact: 'Krishna@gmail.com', exp: 14 },
        { name: 'R.Kalyani', location: 'Vijayawada', contact: 'R.Kalyani@gmail.com', exp: 14 }
    ],
    civil: [
        { name: ' Mohammad Khaleel Ahmed', location: 'Hyderabad', contact: '', exp: 14 },
        { name: 'jansi rani', location: 'Hyderabad ', exp: 14 },
        { name: 'Siddhartha Shah', location: 'Hyderabad, CA', contact: 'alice@example.com', exp: 14 },
        { name: 'Gangaraju', location: 'Visakhapatnam', contact: 'johndoe@example.com', exp: 14 },
        { name: 'Mukkamala Gouripathi Sastry', location: 'Visakhapatnam', contact: 'alice@example.com', exp: 14 },
        { name: 'PAIDI VISWESWAR RAO', location: 'Visakhapatnam', contact: 'alice@example.com', exp: 14 },
        { name: 'DASARI APPARAO', location: 'West Godavari', contact: 'johndoe@example.com', exp: 14 },
        { name: 'Anujagam Purnima Kilaparthy', location: 'Patna', contact: 'alice@example.com', exp: 14 },
        { name: 'k.shanker', location: 'East Godhavari', contact: 'alice@example.com', exp: 14 },
        { name: 'David Lee', location: 'hyderabad', contact: 'alice@example.com', exp: 14 }
    ],
    aidministrative: [
        { name: 'Arshad ', location: 'hyderabad', contact: 'arshad @example.com', exp: 10 },
        { name: 'Krishna Rao Makkena', location: 'hyderabad', contact: 'krishna@example.com', exp: 9 },
        { name: 'Jagan Mohan Nawathe', location: 'khammam', contact: 'jagan@example.com', exp: 22 },
        { name: 'Jagan Mohan', location: 'khammam', contact: 'jagan@example.com', exp: 22 },
        { name: 'Alice Johnson', location: '', contact: 'alice@example.com', exp: 14 },
        { name: 'Alice Johnson', location: 'Los Angeles, CA', contact: 'alice@example.com', exp: 14 },
        { name: 'John Doe', location: 'New York, NY', contact: 'johndoe@example.com', exp: 14 },
        { name: 'Alice Johnson', location: 'Los Angeles, CA', contact: 'alice@example.com', exp: 14 },
        { name: 'Alice Johnson', location: 'Los Angeles, CA', contact: 'alice@example.com', exp: 14 },
        { name: 'Alice Johnson', location: 'Los Angeles, CA', contact: 'alice@example.com', exp: 14 }
    ]
};


