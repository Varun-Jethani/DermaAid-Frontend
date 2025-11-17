import React, { useState } from "react";
import {
  Activity,
  Droplet,
  ChevronRight,
  X,
  AlertCircle,
  Info,
  TrendingUp,
  Shield,
} from "lucide-react";

const Featured = () => {
  const [activeTab, setActiveTab] = useState("skin");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const skinDiseases = [
    {
      name: "Melanoma",
      description: "A serious form of skin cancer that develops in melanocytes",
      severity: "Critical",
      detailedInfo: {
        overview:
          "Melanoma is the most dangerous type of skin cancer. It develops in the melanocytes, the cells that produce melanin (skin pigment). Early detection is crucial for successful treatment.",
        symptoms: [
          "Asymmetrical moles or skin lesions",
          "Irregular or poorly defined borders",
          "Multiple colors within one lesion",
          "Diameter larger than 6mm",
          "Evolving size, shape, or color over time",
        ],
        causes: [
          "Excessive UV radiation exposure",
          "History of sunburns",
          "Genetic predisposition",
          "Weakened immune system",
          "Multiple moles or atypical moles",
        ],
        treatment:
          "Surgical removal, immunotherapy, targeted therapy, radiation therapy, and chemotherapy depending on stage and spread.",
        prevention:
          "Use broad-spectrum sunscreen, avoid tanning beds, wear protective clothing, perform regular self-examinations, and get annual skin checks.",
      },
    },
    {
      name: "Actinic Keratosis",
      description: "Rough, scaly patches caused by sun damage",
      severity: "Moderate",
      detailedInfo: {
        overview:
          "Actinic keratosis is a precancerous skin condition caused by prolonged sun exposure. It appears as rough, scaly patches and can potentially develop into squamous cell carcinoma if left untreated.",
        symptoms: [
          "Rough, dry, or scaly patches on skin",
          "Flat to slightly raised patches",
          "Pink, red, or brown coloration",
          "Itching or burning sensation",
          "Commonly appears on sun-exposed areas",
        ],
        causes: [
          "Chronic sun exposure over years",
          "Frequent use of tanning beds",
          "Fair skin and light hair",
          "Age over 40",
          "Weakened immune system",
        ],
        treatment:
          "Cryotherapy (freezing), topical medications, photodynamic therapy, chemical peels, or laser therapy.",
        prevention:
          "Daily sunscreen use, protective clothing, avoid peak sun hours, regular skin examinations.",
      },
    },
    {
      name: "Basal Cell Carcinoma",
      description: "Most common type of skin cancer",
      severity: "High",
      detailedInfo: {
        overview:
          "Basal cell carcinoma is the most common form of skin cancer, arising from basal cells in the skin. While it rarely metastasizes, it can be locally destructive if not treated.",
        symptoms: [
          "Pearly or waxy bump",
          "Flat, flesh-colored or brown scar-like lesion",
          "Bleeding or scabbing sore that heals and returns",
          "Pink growth with elevated edges",
          "Commonly found on face, ears, and neck",
        ],
        causes: [
          "Long-term sun exposure",
          "Radiation therapy",
          "Fair skin",
          "Age and gender (more common in older men)",
          "Chronic skin inflammation",
        ],
        treatment:
          "Surgical excision, Mohs surgery, cryotherapy, topical medications, or radiation therapy.",
        prevention:
          "Sun protection, avoid tanning beds, protective clothing, regular dermatologist visits.",
      },
    },
    {
      name: "Dermatofibroma",
      description: "Benign skin growth, firm nodule",
      severity: "Low",
      detailedInfo: {
        overview:
          "Dermatofibroma is a common benign skin growth that typically appears as a small, firm nodule. It is harmless and usually does not require treatment unless it becomes bothersome.",
        symptoms: [
          "Firm, raised nodule",
          "Brown, red, or purple color",
          "Usually less than 1 cm in diameter",
          "Dimples when pinched",
          "May be slightly itchy or tender",
        ],
        causes: [
          "Minor skin injuries or insect bites",
          "Abnormal growth of fibroblasts",
          "More common in women",
          "Can appear at any age",
        ],
        treatment:
          "Usually no treatment needed. Surgical removal if cosmetically concerning or symptomatic.",
        prevention:
          "No specific prevention methods, as cause is often unknown.",
      },
    },
    {
      name: "Nevus",
      description: "Common moles or birthmarks on the skin",
      severity: "Low",
      detailedInfo: {
        overview:
          "A nevus (plural: nevi) is a common mole or birthmark. Most are benign, but monitoring changes is important as some can develop into melanoma.",
        symptoms: [
          "Brown, tan, black, red, or skin-colored spots",
          "Flat or raised appearance",
          "Round or oval shape",
          "Uniform color and borders",
          "Usually less than 6mm in diameter",
        ],
        causes: [
          "Genetic factors",
          "Sun exposure",
          "Hormonal changes",
          "Present from birth or develop over time",
        ],
        treatment:
          "Monitoring for changes. Removal if atypical features develop or for cosmetic reasons.",
        prevention:
          "Sun protection, regular self-examinations using ABCDE rule (Asymmetry, Border, Color, Diameter, Evolving).",
      },
    },
    {
      name: "Pigmented Benign Keratosis",
      description: "Non-cancerous growths with pigmentation",
      severity: "Low",
      detailedInfo: {
        overview:
          "Pigmented benign keratosis refers to non-cancerous skin growths with color variation. These are harmless but may be removed for cosmetic reasons.",
        symptoms: [
          "Brown, black, or tan colored patches",
          "Waxy or scaly appearance",
          "Stuck-on appearance",
          "Various sizes",
          "Commonly on trunk, face, and extremities",
        ],
        causes: [
          "Aging process",
          "Genetic predisposition",
          "Sun exposure",
          "More common after age 40",
        ],
        treatment:
          "Usually no treatment needed. Cryotherapy, curettage, or laser removal if desired.",
        prevention: "Sun protection may reduce number and progression.",
      },
    },
    {
      name: "Seborrheic Keratosis",
      description: "Benign, wart-like growths",
      severity: "Low",
      detailedInfo: {
        overview:
          "Seborrheic keratosis is one of the most common benign skin growths. They appear as wart-like spots and are completely harmless, though they can be cosmetically concerning.",
        symptoms: [
          "Waxy, wart-like appearance",
          "Stuck-on look",
          "Brown, black, or tan color",
          "Round or oval shape",
          "May be itchy occasionally",
        ],
        causes: [
          "Aging (very common in people over 50)",
          "Genetic factors",
          "Not caused by sun exposure",
          "Not contagious",
        ],
        treatment:
          "No treatment necessary. Removal options include cryotherapy, curettage, or electrosurgery if bothersome.",
        prevention: "Cannot be prevented as they are age-related.",
      },
    },
    {
      name: "Squamous Cell Carcinoma",
      description: "Second most common skin cancer",
      severity: "High",
      detailedInfo: {
        overview:
          "Squamous cell carcinoma is the second most common type of skin cancer. It arises from squamous cells in the outer layer of skin and can spread if not treated early.",
        symptoms: [
          "Firm, red nodule",
          "Flat lesion with scaly, crusted surface",
          "Non-healing sore or ulcer",
          "Rough, scaly patch",
          "May bleed or become tender",
        ],
        causes: [
          "Cumulative sun exposure",
          "Tanning bed use",
          "Radiation therapy",
          "Chronic skin wounds or scars",
          "Weakened immune system",
        ],
        treatment:
          "Surgical excision, Mohs surgery, radiation therapy, cryotherapy, or topical chemotherapy.",
        prevention:
          "Daily sunscreen, protective clothing, avoid tanning beds, regular skin checks.",
      },
    },
    {
      name: "Vascular Lesion",
      description: "Abnormalities of blood vessels in skin",
      severity: "Moderate",
      detailedInfo: {
        overview:
          "Vascular lesions are abnormalities of blood vessels in or under the skin. They can be congenital or acquired and range from harmless birthmarks to conditions requiring treatment.",
        symptoms: [
          "Red, purple, or blue discoloration",
          "Flat or raised appearance",
          "May blanch with pressure",
          "Can vary in size",
          "Sometimes associated with pain or bleeding",
        ],
        causes: [
          "Congenital malformations",
          "Genetic factors",
          "Hormonal changes",
          "Trauma or injury",
          "Age-related changes",
        ],
        treatment:
          "Laser therapy, sclerotherapy, surgical removal, or observation depending on type and location.",
        prevention:
          "Most are not preventable. Protecting skin from trauma may help prevent some acquired lesions.",
      },
    },
  ];

  const woundTypes = [
    {
      name: "Abrasions",
      description:
        "Superficial wounds from skin rubbing against rough surfaces",
      severity: "Low",
      detailedInfo: {
        overview:
          "Abrasions are superficial wounds that occur when skin rubs or scrapes against a rough surface. They are common injuries that typically heal well with proper care.",
        symptoms: [
          "Scraped or scratched skin surface",
          "Mild bleeding or oozing",
          "Pain and tenderness",
          "Redness around the wound",
          "May contain debris or dirt",
        ],
        causes: [
          "Falls on rough surfaces",
          "Sports injuries",
          "Accidents or collisions",
          "Friction from equipment or clothing",
        ],
        treatment:
          "Clean with water, remove debris, apply antibiotic ointment, cover with bandage. Change dressing daily.",
        prevention:
          "Wear protective gear during activities, use caution on rough surfaces, keep skin moisturized.",
      },
    },
    {
      name: "Bruises",
      description: "Blood pooling under skin from blunt force",
      severity: "Low",
      detailedInfo: {
        overview:
          "Bruises (contusions) occur when blood vessels under the skin break due to blunt force trauma, causing blood to pool and discolor the skin.",
        symptoms: [
          "Discoloration (purple, blue, black, yellow, green)",
          "Tenderness and pain",
          "Swelling",
          "Color changes as it heals",
          "Usually resolves in 2-4 weeks",
        ],
        causes: [
          "Blunt trauma or impact",
          "Falls or bumps",
          "Sports injuries",
          "Some medications (blood thinners)",
          "Medical conditions affecting clotting",
        ],
        treatment:
          "RICE method (Rest, Ice, Compression, Elevation). Pain relievers if needed. Usually heals on its own.",
        prevention:
          "Use protective equipment, be cautious in activities, manage underlying medical conditions.",
      },
    },
    {
      name: "Burns",
      description: "Tissue damage from heat, chemicals, or electricity",
      severity: "High",
      detailedInfo: {
        overview:
          "Burns are tissue damage caused by heat, chemicals, electricity, radiation, or friction. Severity ranges from minor (first-degree) to severe (third-degree).",
        symptoms: [
          "First-degree: redness, pain, minor swelling",
          "Second-degree: blisters, severe pain, red/splotchy skin",
          "Third-degree: white/charred skin, numbness, severe damage",
          "Pain levels vary by depth",
          "Risk of infection",
        ],
        causes: [
          "Fire or flames",
          "Hot liquids or steam",
          "Chemical exposure",
          "Electrical contact",
          "Sun exposure",
        ],
        treatment:
          "Cool water (not ice), sterile dressing, pain management. Severe burns require immediate medical attention and may need skin grafts.",
        prevention:
          "Fire safety, careful handling of hot items, use sunscreen, wear protective equipment with chemicals.",
      },
    },
    {
      name: "Cut",
      description: "Sharp object penetration through skin layers",
      severity: "Moderate",
      detailedInfo: {
        overview:
          "Cuts (lacerations) are wounds caused by sharp objects penetrating the skin. Depth and location determine severity and treatment needs.",
        symptoms: [
          "Open wound with defined edges",
          "Bleeding (amount varies by depth)",
          "Pain",
          "Possible nerve or tendon damage if deep",
          "Risk of scarring",
        ],
        causes: [
          "Knives or sharp tools",
          "Glass or metal edges",
          "Accidents during activities",
          "Sharp objects in the environment",
        ],
        treatment:
          "Apply pressure to stop bleeding, clean wound, use sterile bandage. Deep cuts may require stitches or surgical repair.",
        prevention:
          "Use caution with sharp objects, wear protective gloves, keep work areas safe, use proper technique.",
      },
    },
    {
      name: "Diabetic Wounds",
      description: "Chronic wounds due to poor circulation and healing",
      severity: "Critical",
      detailedInfo: {
        overview:
          "Diabetic wounds, especially foot ulcers, are chronic wounds that develop due to poor circulation, nerve damage, and impaired healing in people with diabetes.",
        symptoms: [
          "Slow-healing or non-healing wounds",
          "Numbness or reduced sensation",
          "Swelling and redness",
          "Drainage or discharge",
          "Discoloration or warmth around wound",
          "Risk of infection and amputation",
        ],
        causes: [
          "Poor blood sugar control",
          "Peripheral neuropathy",
          "Reduced blood circulation",
          "Pressure points on feet",
          "Minor injuries that go unnoticed",
        ],
        treatment:
          "Blood sugar management, wound debridement, special dressings, antibiotics if infected, pressure relief, sometimes surgery.",
        prevention:
          "Control blood sugar, daily foot inspections, proper footwear, regular podiatry visits, immediate treatment of minor injuries.",
      },
    },
    {
      name: "Laseration",
      description: "Deep, irregular tears in the skin",
      severity: "High",
      detailedInfo: {
        overview:
          "Lacerations are deep, irregular wounds with torn or jagged edges, often caused by blunt trauma or crushing injuries. They can damage underlying tissues.",
        symptoms: [
          "Deep, irregular wound edges",
          "Significant bleeding",
          "Tissue damage",
          "Pain and swelling",
          "Possible damage to muscles, tendons, or nerves",
          "High infection risk",
        ],
        causes: [
          "Blunt force trauma",
          "Machinery accidents",
          "Motor vehicle accidents",
          "Falls onto irregular surfaces",
          "Animal bites",
        ],
        treatment:
          "Control bleeding, clean wound thoroughly, may require stitches or surgical repair, tetanus shot, antibiotics, careful monitoring.",
        prevention:
          "Safety equipment, careful handling of machinery, protective gear in hazardous environments.",
      },
    },
    {
      name: "Normal",
      description: "Healthy, intact skin with no visible wounds",
      severity: "None",
      detailedInfo: {
        overview:
          "Normal, healthy skin is intact without wounds, lesions, or abnormalities. It serves as a protective barrier and indicator of overall health.",
        symptoms: [
          "Smooth, intact surface",
          "Appropriate color for skin type",
          "No pain, itching, or irritation",
          "Good elasticity",
          "Uniform texture",
        ],
        causes: [
          "Proper skin care routine",
          "Good nutrition and hydration",
          "Protection from environmental damage",
          "Healthy lifestyle",
        ],
        treatment:
          "Maintain with regular cleansing, moisturizing, sun protection, and healthy habits.",
        prevention:
          "Daily skincare, balanced diet, adequate water intake, sun protection, avoid smoking, manage stress.",
      },
    },
    {
      name: "Pressure Wounds",
      description: "Bedsores from prolonged pressure on skin",
      severity: "High",
      detailedInfo: {
        overview:
          "Pressure wounds (bedsores or pressure ulcers) develop when prolonged pressure on skin reduces blood flow, causing tissue damage. Common in immobile patients.",
        symptoms: [
          "Stage 1: Red, non-blanching skin",
          "Stage 2: Partial thickness skin loss, blister",
          "Stage 3: Full thickness loss, crater-like",
          "Stage 4: Deep damage to muscle/bone",
          "Pain, warmth, or coolness in affected area",
        ],
        causes: [
          "Prolonged immobility",
          "Pressure on bony prominences",
          "Friction and shearing forces",
          "Poor nutrition",
          "Moisture and incontinence",
        ],
        treatment:
          "Pressure relief, repositioning every 2 hours, special mattresses, wound care, nutrition support, sometimes surgical repair.",
        prevention:
          "Frequent repositioning, pressure-relieving devices, skin inspection, good nutrition, keep skin clean and dry.",
      },
    },
    {
      name: "Surgical Wounds",
      description: "Incisions made during medical procedures",
      severity: "Moderate",
      detailedInfo: {
        overview:
          "Surgical wounds are intentional incisions made during medical procedures. Proper care is essential for healing and preventing complications.",
        symptoms: [
          "Clean, straight incision line",
          "Initial redness and swelling",
          "Mild pain or discomfort",
          "Possible drainage in first days",
          "Gradual healing over weeks",
        ],
        causes: [
          "Surgical procedures",
          "Medical interventions",
          "Planned incisions for treatment",
        ],
        treatment:
          "Keep clean and dry, follow surgeon instructions, watch for infection signs, take prescribed medications, attend follow-up appointments.",
        prevention:
          "Not applicable (intentional). Proper post-op care prevents complications.",
      },
    },
    {
      name: "Venous Wounds",
      description: "Ulcers from poor venous circulation",
      severity: "High",
      detailedInfo: {
        overview:
          "Venous ulcers are chronic wounds caused by poor venous circulation, typically occurring on lower legs. They are the most common type of leg ulcers.",
        symptoms: [
          "Shallow wound with irregular edges",
          "Located on lower leg, often near ankle",
          "Surrounding skin changes (brown discoloration, hardening)",
          "Swelling in legs",
          "Aching or heaviness in legs",
          "Drainage from wound",
        ],
        causes: [
          "Chronic venous insufficiency",
          "Varicose veins",
          "Previous blood clots",
          "Obesity",
          "Prolonged standing",
          "Previous leg injuries",
        ],
        treatment:
          "Compression therapy, wound dressings, leg elevation, exercise, treat underlying venous disease, sometimes vein procedures.",
        prevention:
          "Compression stockings, regular exercise, leg elevation, maintain healthy weight, avoid prolonged standing.",
      },
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Critical":
        return "bg-red-500";
      case "High":
        return "bg-orange-500";
      case "Moderate":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const currentData = activeTab === "skin" ? skinDiseases : woundTypes;

  const openModal = (condition) => {
    setSelectedCondition(condition);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedCondition(null), 300);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setActiveTab("skin")}
            className={`flex items-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "skin"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                : "bg-gray-900 text-gray-400 hover:bg-gray-800 border border-gray-800"
            }`}
          >
            <Activity className="w-5 h-5" />
            <span>Skin Diseases Dataset</span>
            <span
              className={`${
                activeTab === "skin" ? "bg-blue-700" : "bg-gray-800"
              } px-3 py-1 rounded-full text-sm`}
            >
              {skinDiseases.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("wound")}
            className={`flex items-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "wound"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
                : "bg-gray-900 text-gray-400 hover:bg-gray-800 border border-gray-800"
            }`}
          >
            <Droplet className="w-5 h-5" />
            <span>Wound Dataset</span>
            <span
              className={`${
                activeTab === "wound" ? "bg-blue-700" : "bg-gray-800"
              } px-3 py-1 rounded-full text-sm`}
            >
              {woundTypes.length}
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {activeTab === "skin"
              ? "Skin Disease Classification"
              : "Wound Type Classification"}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
            {activeTab === "skin"
              ? "Our AI model can identify and classify various skin conditions, from benign growths to serious carcinomas"
              : "Comprehensive wound analysis system covering traumatic injuries to chronic conditions"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-gray-900 rounded-xl p-6 transition-all duration-300 transform border border-gray-800 ${
                hoveredCard === index
                  ? "scale-105 shadow-xl shadow-blue-600/20 border-blue-600/50"
                  : "hover:border-gray-700"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-blue-400">{item.name}</h3>
                {item.severity !== "None" && (
                  <span
                    className={`${getSeverityColor(
                      item.severity
                    )} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {item.severity}
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
              <button
                onClick={() => openModal(item)}
                className="flex items-center text-blue-400 text-sm font-semibold hover:gap-2 transition-all duration-300 cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {currentData.length}
              </div>
              <div className="text-gray-400 font-medium">
                Conditions Detected
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">
                AI-Powered
              </div>
              <div className="text-gray-400 font-medium">
                Deep Learning Models
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">
                Real-Time
              </div>
              <div className="text-gray-400 font-medium">
                Analysis & Detection
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && selectedCondition && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm mt-40"
          onClick={closeModal}
          style={{ animation: "fadeIn 0.3s ease-out" }}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "slideUp 0.3s ease-out" }}
          >
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 flex items-start justify-between border-b border-gray-800 z-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedCondition.name}
                </h2>
                <p className="text-white/80">{selectedCondition.description}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xl font-bold text-blue-400">Overview</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {selectedCondition.detailedInfo.overview}
                </p>
              </div>

              {selectedCondition.severity !== "None" && (
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-400">Severity Level:</span>
                  <span
                    className={`${getSeverityColor(
                      selectedCondition.severity
                    )} text-white px-4 py-1 rounded-full text-sm font-semibold`}
                  >
                    {selectedCondition.severity}
                  </span>
                </div>
              )}

              <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  Symptoms
                </h3>
                <ul className="space-y-2">
                  {selectedCondition.detailedInfo.symptoms.map(
                    (symptom, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{symptom}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  Causes & Risk Factors
                </h3>
                <ul className="space-y-2">
                  {selectedCondition.detailedInfo.causes.map((cause, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <h3 className="text-xl font-bold text-blue-400">Treatment</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {selectedCondition.detailedInfo.treatment}
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-bold text-blue-400">
                    Prevention
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {selectedCondition.detailedInfo.prevention}
                </p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-200 text-sm">
                  <strong>Medical Disclaimer:</strong> This information is for
                  educational purposes only and should not replace professional
                  medical advice. Always consult with a healthcare provider for
                  proper diagnosis and treatment.
                </p>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={closeModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  );
};

export default Featured;
