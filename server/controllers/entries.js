const Entry = require("../models/entry")

/// TABLE ALL
const getAllEntriesTable = async(req,res) => {
    const myData = await Entry.aggregate([
    {
        $addFields: {
            end_year: { $ifNull: ["$end_year", "No data"] },
            start_year: { $ifNull: ["$start_year", "No data"] },
            sector: { $ifNull: ["$sector", "No data"] },
            country: { $ifNull: ["$country", "No data"] },
            topic: { $ifNull: ["$topic", "No data"] },
            insight: { $ifNull: ["$insight", "No data"] },
            url: { $ifNull: ["$url", "No data"] },
            region: { $ifNull: ["$region", "No data"] },
            impact: { $ifNull: ["$impact", "No data"] },
            added: { $ifNull: ["$added", "No data"] },
            published: { $ifNull: ["$published", "No data"] },
            relevance: { $ifNull: ["$relevance", "No data"] },
            pestle: { $ifNull: ["$pestle", "No data"] },
            source: { $ifNull: ["$source", "No data"] },
            title: { $ifNull: ["$title", "No data"] },
            likelihood: { $ifNull: ["$likelihood", "No data"] },
            id: { $ifNull: ["$id", "No data"] }
        }
    },
    {
        $sort: { country: 1 }
    }
]);
    res.status(200).json(myData);
};
const getAllEntriesTable1 = async(req,res) => {
    const myData = await Entry.aggregate([
    { $match: {region: { $in: ['Eastern Asia','Western Asia'] } } },   
    {
        $addFields: {
            end_year: { $ifNull: ["$end_year", "No data"] },
            start_year: { $ifNull: ["$start_year", "No data"] },
            sector: { $ifNull: ["$sector", "No data"] },
            country: { $ifNull: ["$country", "No data"] },
            topic: { $ifNull: ["$topic", "No data"] },
            insight: { $ifNull: ["$insight", "No data"] },
            url: { $ifNull: ["$url", "No data"] },
            region: { $ifNull: ["$region", "No data"] },
            impact: { $ifNull: ["$impact", "No data"] },
            added: { $ifNull: ["$added", "No data"] },
            published: { $ifNull: ["$published", "No data"] },
            relevance: { $ifNull: ["$relevance", "No data"] },
            pestle: { $ifNull: ["$pestle", "No data"] },
            source: { $ifNull: ["$source", "No data"] },
            title: { $ifNull: ["$title", "No data"] },
            likelihood: { $ifNull: ["$likelihood", "No data"] },
            id: { $ifNull: ["$id", "No data"] }
        }
    },
]);
    res.status(200).json(myData);
};
/// LINE CHART API2 country/sector
const getAllEntriesLine1 = async(req,res) => {
    const myData = await Entry.aggregate([
     {
        $match: {
            country: { $ne: null },
            sector: { $ne: null }
        }
    },   
    {
        $group: {
            _id: { country: "$country", sector: "$sector" },
            count: { $sum: 1 }
        }
    },
    {
        $group: {
            _id: "$_id.country",
            data: {
                $push: {
                    x: "$_id.sector",
                    y: "$count"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            id: "$_id",
            data: 1
        }
    }
]);
    res.status(200).json(myData);
};
/// LINE CHART API2 region/sector
const getAllEntriesLine2 = async(req,res) => {
    const myData = await Entry.aggregate([
     {
        $match: {
            region: { $ne: null },
            sector: { $ne: null }
        }
    },   
    {
        $group: {
            _id: { region: "$region", sector: "$sector" },
            count: { $sum: 1 }
        }
    },
    {
        $group: {
            _id: "$_id.region",
            data: {
                $push: {
                    x: "$_id.sector",
                    y: "$count"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            id: "$_id",
            data: 1
        }
    }
]);
    res.status(200).json(myData);
};
/// LINE CHART API3 country/pestle
const getAllEntriesLine3 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
        $match: {
            country: { $ne: null },
            pestle: { $ne: null }
        }
    },   
    {
        $group: {
            _id: { country: "$country", pestle: "$pestle" },
            count: { $sum: 1 }
        }
    },
    {
        $group: {
            _id: "$_id.country",
            data: {
                $push: {
                    x: "$_id.pestle",
                    y: "$count"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            id: "$_id",
            data: 1
        }
    }
]);
    res.status(200).json(myData);
};
/// LINE CHART API4 region/pestle
const getAllEntriesLine4 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
        $match: {
            region: { $ne: null },
            pestle: { $ne: null }
        }
    },   
    {
        $group: {
            _id: { region: "$region", pestle: "$pestle" },
            count: { $sum: 1 }
        }
    },
    {
        $group: {
            _id: "$_id.region",
            data: {
                $push: {
                    x: "$_id.pestle",
                    y: "$count"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            id: "$_id",
            data: 1
        }
    }
]);
    res.status(200).json(myData);
};
/// LINE CHART API5 region/pestle dashboard
const getAllEntriesLine5 = async(req,res) => {
    const myData = await Entry.aggregate([
   {
      $match: {
        region: { $ne: null },
        sector: { $ne: null }
      }
    },
    {
      $group: {
        _id: { region: "$region", sector: "$sector" },
        count: { $sum: 1 }
      }
    },
    {
      $match: {
        "_id.region": { $in: ["Western Asia","Southern Asia"] }
      }
    },
    {
      $match: {
        "_id.sector": { $in: ["Aerospace & defence", "Construction", "Financial services", "Government", "Retail"] }
      }
    },
    {
      $sort: {
        "_id.region": 1,
        "_id.sector": -1
      }
    },
    {
      $group: {
        _id: "$_id.region",
        data: {
          $push: {
            x: "$_id.sector",
            y: "$count"
          }
        }
      }
    },
    {
      $project: {
        _id: 0,
        id: "$_id",
        data: 1
      }
    }
]);
    res.status(200).json(myData);
};
/// LINE CHART API6  dashboard
const getAllEntriesLine6 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
    $match: {
        sector: 'Energy',
        country: {
            $in: ['Australia', 'Canada', 'Egypt', 'Indonesia', 'Iran', 'Iraq']
        }
    }
    }, 
    {
    $group: {
        _id: {
            country: '$country'
        },
        totalIntensity: {
            $sum: '$intensity'
        }
    }
    }, 
    {
    $project: {
        _id: 0,
        x: '$_id.country',
        y: '$totalIntensity'
    }
    }, 
    {
    $sort: {
        x: 1
    }
    }, 
    {
    $group: {
        _id: 'energy',
        data: {
            $push: {
                x: '$x',
                y: '$y'
            }
        }
    }
    }, 
    {
    $project: {
        _id: 0,
        id: '$_id',
        data: 1
    }
}
]);
    res.status(200).json(myData);
};
/// LINE CHART API7  dashboard
const getAllEntriesLine7 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
    $match: {
        sector: 'Financial services',
        country: {
            $in: ['Algeria', 'Angola', 'India', 'Japan', 'Libya']
        }
    }
   }, 
   {
    $group: {
        _id: {
            country: '$country'
        },
        totalIntensity: {
            $sum: '$intensity'
        }
    }
    }, 
    {
    $project: {
        _id: 0,
        x: '$_id.country',
        y: '$totalIntensity'
    }
    }, 
    {
    $sort: {
        x: 1
    }
    }, 
    {
    $group: {
        _id: 'Financial services',
        data: {
            $push: {
                x: '$x',
                y: '$y'
            }
        }
    }
    }, 
    {
    $project: {
        _id: 0,
        id: '$_id',
        data: 1
    }
}
]);
    res.status(200).json(myData);
};
/// LINE CHART API8  dashboard
const getAllEntriesLine8 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
    $match: {
        sector: 'Retail',
        country: {
            $in: ['Iran', 'Iraq', 'Malaysia', 'Japan', 'Saudi Arabia', 'China']
        }
    }
    }, 
    {
    $group: {
        _id: {
            country: '$country'
        },
        totalIntensity: {
            $sum: '$intensity'
        }
    }
    }, 
    {
    $project: {
        _id: 0,
        x: '$_id.country',
        y: '$totalIntensity'
    }
    }, 
    {
    $sort: {
        x: 1
    }
    }, 
    {
    $group: {
        _id: 'Retail',
        data: {
            $push: {
                x: '$x',
                y: '$y'
            }
        }
    }
    }, 
    {
    $project: {
        _id: 0,
        id: '$_id',
        data: 1
    }
}
]);
    res.status(200).json(myData);
};
/// LINE CHART API9  dashboard
const getAllEntriesLine9 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
    $match: {
        sector: 'Manufacturing',
        country: {
            $in: ['Iran', 'Iraq', 'Spain', 'Greece']
        }
    }
   }, 
   {
    $group: {
        _id: {
            country: '$country'
        },
        totalIntensity: {
            $sum: '$intensity'
        }
    }
    }, 
    {
    $project: {
        _id: 0,
        x: '$_id.country',
        y: '$totalIntensity'
    }
    }, 
    {
    $sort: {
        x: 1
    }
    }, 
    {
    $group: {
        _id: 'Manufacturing',
        data: {
            $push: {
                x: '$x',
                y: '$y'
            }
        }
    }
    }, 
    {
    $project: {
        _id: 0,
        id: '$_id',
        data: 1
    }
}
]);
    res.status(200).json(myData);
};
/// LINE CHART API10  dashboard
const getAllEntriesLine10 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
      $match: {
        country: { $ne: null },
        pestle: { $ne: null }
      }
    },
    {
      $group: {
        _id: { country: "$country", pestle: "$pestle" },
        count: { $sum: 1 }
      }
    },
    {
      $match: {
        "_id.country": { $in: ["India"] }
      }
    },
    
    {
      $sort: {
        
        "_id.pestle": 1
      }
    },
    {
      $group: {
        _id: "$_id.country",
        data: {
          $push: {
            x: "$_id.pestle",
            y: "$count"
          }
        }
      }
    },
    {
      $project: {
        _id: 0,
        id: "$_id",
        data: 1
      }
    }
]);
    res.status(200).json(myData);
};
///BAR CHART API 1 country/sector
const getAllEntriesBar1 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
        $match: {
            country: { $ne: null },
            sector: { $ne: null }
        }
    },     
    {
        $group: {
            _id: {country: "$country", sector: "$sector"},
            totalIntensity: {$sum: "$intensity"},
            totalImpact: {$sum: "$impact"},
            totalRelevance: {$sum: "$relevance"},
            totalLikelihood: {$sum: "$likelihood"}
        }
    },
    {
        $project: {
            _id: 0,
            country: "$_id.country",
            sector: "$_id.sector",
            totalIntensity: 1,
            totalImpact: 1,
            totalRelevance: 1,
            totalLikelihood: 1
        }
    },
    {
      $addFields: {
        sector: { $concat: ["$sector", " (", "$country", ")"] },
      },
    },
    {
        $group: {
            _id: "$country",
            data: {
                $push: {
                    sector: "$sector",
                    country: "$country",
                    totalIntensity: "$totalIntensity",
                    totalImpact: "$totalImpact",
                    totalRelevance: "$totalRelevance",
                    totalLikelihood: "$totalLikelihood"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            country: "$_id",
            sect:"$_id.sector",
            data: 1
        }
    }
]);
    res.status(200).json(myData)
};
///BAR CHART API 2 region/sector
const getAllEntriesBar2 = async(req,res) => {
    const myData = await Entry.aggregate([
     {
        $match: {
            region: { $ne: null },
            sector: { $ne: null }
        }
    },     
    {
        $group: {
            _id: {region: "$region", sector: "$sector"},
            totalIntensity: {$sum: "$intensity"},
            totalImpact: {$sum: "$impact"},
            totalRelevance: {$sum: "$relevance"},
            totalLikelihood: {$sum: "$likelihood"}
        }
    },
    {
        $project: {
            _id: 0,
            region: "$_id.region",
            sector: "$_id.sector",
            totalIntensity: 1,
            totalImpact: 1,
            totalRelevance: 1,
            totalLikelihood: 1
        }
    },
    {
      $addFields: {
        sector: { $concat: ["$sector", " (", "$region", ")"] },
      },
    },
    {
        $group: {
            _id: "$region",
            data: {
                $push: {
                    sector: "$sector",
                    region: "$region",
                    totalIntensity: "$totalIntensity",
                    totalImpact: "$totalImpact",
                    totalRelevance: "$totalRelevance",
                    totalLikelihood: "$totalLikelihood"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            region: "$_id",
            sect:"$_id.sector",
            data: 1
        }
    }
]);
    res.status(200).json(myData)
};
///BAR CHART API 3 country/pestle
const getAllEntriesBar3 = async(req,res) => {
    const myData = await Entry.aggregate([
     {
        $match: {
            country: { $ne: null },
            pestle: { $ne: null }
        }
    },     
    {
        $group: {
            _id: {country: "$country", pestle: "$pestle"},
            totalIntensity: {$sum: "$intensity"},
            totalImpact: {$sum: "$impact"},
            totalRelevance: {$sum: "$relevance"},
            totalLikelihood: {$sum: "$likelihood"}
        }
    },
    {
        $project: {
            _id: 0,
            country: "$_id.country",
            pestle: "$_id.pestle",
            totalIntensity: 1,
            totalImpact: 1,
            totalRelevance: 1,
            totalLikelihood: 1
        }
    },
    {
      $addFields: {
        pestle: { $concat: ["$pestle", " (", "$country", ")"] },
      },
    },
    {
        $group: {
            _id: "$country",
            data: {
                $push: {
                    pestle: "$pestle",
                    country: "$country",
                    totalIntensity: "$totalIntensity",
                    totalImpact: "$totalImpact",
                    totalRelevance: "$totalRelevance",
                    totalLikelihood: "$totalLikelihood"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            country: "$_id",
            sect:"$_id.pestle",
            data: 1
        }
    }
]);
    res.status(200).json(myData)
};
///BAR CHART API 4 region/pestle
const getAllEntriesBar4 = async(req,res) => {
    const myData = await Entry.aggregate([
     {
        $match: {
            region: { $ne: null },
            pestle: { $ne: null }
        }
    },     
    {
        $group: {
            _id: {region: "$region", pestle: "$pestle"},
            totalIntensity: {$sum: "$intensity"},
            totalImpact: {$sum: "$impact"},
            totalRelevance: {$sum: "$relevance"},
            totalLikelihood: {$sum: "$likelihood"}
        }
    },
    {
        $project: {
            _id: 0,
            region: "$_id.region",
            pestle: "$_id.pestle",
            totalIntensity: 1,
            totalImpact: 1,
            totalRelevance: 1,
            totalLikelihood: 1
        }
    },
    {
      $addFields: {
        pestle: { $concat: ["$pestle", " (", "$region", ")"] },
      },
    },
    {
        $group: {
            _id: "$region",
            data: {
                $push: {
                    pestle: "$pestle",
                    region: "$region",
                    totalIntensity: "$totalIntensity",
                    totalImpact: "$totalImpact",
                    totalRelevance: "$totalRelevance",
                    totalLikelihood: "$totalLikelihood"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            region: "$_id",
            sect:"$_id.pestle",
            data: 1
        }
    }
]);
    res.status(200).json(myData)
};
///BAR CHART API 5 pestlewise
const getAllEntriesBar5 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
        $match: {
            pestle: { $ne: null },
            country: { $ne: null },
            sector: { $ne: null }
        }
    },      
     {
        $group: {
            _id: { pestle: "$pestle", country: "$country",sector: "$sector" },
            sector_count: { $sum: 1 }
        }
    },
    {
        $project: {
            pestle: "$_id.pestle",
            country: "$_id.country",
            sector: "$_id.sector",
            sector_count: 1,
            _id: 0
        }
    },
    {
      $addFields: {
        pestle: { $concat: ["$pestle", " (", "$country", ")"] },
      },
    },
    {
        $group: {
            _id: {country:"$country",pestle:"$pestle"},
            data: {
                $push: {
                    sector: "$sector",
                    sector_count: "$sector_count"
                }
            }
        }
    },
    {
        $group: {
            _id: "$_id.country",
            data: {
                $push: {
                    pestle: "$_id.pestle",
                    data: "$data"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            country: "$_id",
            data: 1
        }
    }
]);
    res.status(200).json(myData)
};
///BAR CHART API 6 pestlewise
const getAllEntriesBar6 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
        $match: {
            pestle: { $ne: null },
            region: { $ne: null },
            sector: { $ne: null }
        }
    },      
     {
        $group: {
            _id: { pestle: "$pestle", region: "$region",sector: "$sector" },
            sector_count: { $sum: 1 }
        }
    },
    {
        $project: {
            pestle: "$_id.pestle",
            region: "$_id.region",
            sector: "$_id.sector",
            sector_count: 1,
            _id: 0
        }
    },
    {
      $addFields: {
        pestle: { $concat: ["$pestle", " (", "$region", ")"] },
      },
    },
    {
        $group: {
            _id: {region:"$region",pestle:"$pestle"},
            data: {
                $push: {
                    sector: "$sector",
                    sector_count: "$sector_count"
                }
            }
        }
    },
    {
        $group: {
            _id: "$_id.region",
            data: {
                $push: {
                    pestle: "$_id.pestle",
                    data: "$data"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            region: "$_id",
            data: 1
        }
    }
]);
    res.status(200).json(myData)
};
///BAR CHART API 7 pestlewise Dashboard
const getAllEntriesBar7 = async(req,res) => {
    const myData = await Entry.aggregate([
 {
    $match: {
      country: "India",
      end_year: { $nin: [null] }
    }
  },
  {
    $group: {
      _id: "$end_year",
      totalimpact: { $sum: "$impact" },
      totalintensity: { $sum: "$intensity" },
      totalrelevance: { $sum: "$relevance" },
      totallikelihood: { $sum: "$likelihood" }
    }
  },
  {
    $project: {
      _id: 0,
      end_year: "$_id",
      totalimpact: 1,
      totalintensity: 1,
      totalrelevance: 1,
      totallikelihood: 1
    }
  },
  {
    $sort: {
      end_year: -1
    }
  }
]);
    res.status(200).json(myData)
};
///BAR CHART API 8 pestlewise Dashboard 
const getAllEntriesBar8 = async(req,res) => {
    const myData = await Entry.aggregate([
 {
    $match: {
      country: "China",
      sector: { $ne: null, $ne: "Energy" }
    }
  },
  {
    $group: {
      _id: "$sector",
      totalimpact: { $sum: "$impact" },
      totalintensity: { $sum: "$intensity" },
      totalrelevance: { $sum: "$relevance" },
      totallikelihood: { $sum: "$likelihood" }
    }
  },
  {
    $project: {
      _id: 0,
      sector: "$_id",
      totalimpact: 1,
      totalintensity: 1,
      totalrelevance: 1,
      totallikelihood: 1
    }
  }
]);
    res.status(200).json(myData)
};
///SUNBURST CHART API
// const getAllEntriesSunburst = async(req,res) => {
//     const myData = await Entry.find(
//             {
//                 $and:[{
//                      country:{
//                         $ne: null
//                     }
//                 },
//                 {
//                     sector:{
//                         $ne: null
//                     }
//                 },
//                 {
//                     pestle:
//                     {
//                         $ne: null
//                     }
//                 }
//             ]
//         },
//         {
//             country: 1,
//             sector: 1,
//             pestle: 1
//         }
//         );
//     res.status(200).json(myData)
// };

///PIE CHART API country/sector dashboard
const getAllEntriesPie = async(req,res) => {
    const myData = await Entry.aggregate([
  {
    $match: {
      country: "United States of America",
       pestle: { $ne: null }
    }
  },
  {
    $group: {
      _id: "$pestle",
      count: {
        $sum: 1
      }
    }
  },
  {
    $project: {
      id: "$_id",
      value: "$count",
      _id: 0
    }
  },
  {
    $sort: {
      id: -1
    }
  }
        ]);
    res.status(200).json(myData)
};
///PIE CHART API 1 country/sector
const getAllEntriesPie1 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
        $match: {
            country: { $ne: null },
            sector: { $ne: null }
        }
    },     
    {
        $group: {
            _id: { country: "$country", sector: "$sector" },
            count: { $sum: 1 }
        }
    },
    {
        $sort: {
            "_id.country": 1,
            "count": -1
        }
    },
    {
        $group: {
            _id: "$_id.country",
            sectors: {
                $push: {
                    sector: "$_id.sector",
                    count: "$count"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            country: "$_id",
            data: {
                $slice: ["$sectors", 5]
            }
        }
    }
        ]);
    res.status(200).json(myData)
};
///PIE CHART API 2 region/sector
const getAllEntriesPie2 = async(req,res) => {
    const myData = await Entry.aggregate([
     {
        $match: {
            region: { $ne: null },
            sector: { $ne: null }
        }
    },     
    {
        $group: {
            _id: { region: "$region", sector: "$sector" },
            count: { $sum: 1 }
        }
    },
    {
        $sort: {
            "_id.region": 1,
            "count": -1
        }
    },
    {
        $group: {
            _id: "$_id.region",
            sectors: {
                $push: {
                    sector: "$_id.sector",
                    count: "$count"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            region: "$_id",
            data: {
                $slice: ["$sectors", 5]
            }
        }
    }
        ]);
    res.status(200).json(myData)
};
///PIE CHART API 3 country/pestle
const getAllEntriesPie3 = async(req,res) => {
    const myData = await Entry.aggregate([
    {
        $match: {
            pestle: { $ne: null },
            country: { $ne: null },
        }
    },      
   {
        $group: {
            _id: { country: "$country", pestle: "$pestle" },
            count: { $sum: 1 }
        }
    },
    {
        $sort: {
            "_id.country": 1,
            "count": -1
        }
    },
    {
        $group: {
            _id: "$_id.country",
            pestles: {
                $push: {
                    pestle: "$_id.pestle",
                    count: "$count"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            country: "$_id",
            data: {
                $slice: ["$pestles", 5]
            }
        }
    }
        ]);
    res.status(200).json(myData)
};
///PIE CHART API 4 region/pestle
const getAllEntriesPie4 = async(req,res) => {
    const myData = await Entry.aggregate([
     {
        $match: {
            pestle: { $ne: null },
            region: { $ne: null },
        }
    },   
    {
        $group: {
            _id: { region: "$region", pestle: "$pestle" },
            count: { $sum: 1 }
        }
    },
    {
        $sort: {
            "_id.region": 1,
            "count": -1
        }
    },
    {
        $group: {
            _id: "$_id.region",
            pestles: {
                $push: {
                    pestle: "$_id.pestle",
                    count: "$count"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            region: "$_id",
            data: {
                $slice: ["$pestles", 5]
            }
        }
    }
        ]);
    res.status(200).json(myData)
};
///GEO CHART API
const getAllEntriesGeo = async(req,res) => {
    const myData = await Entry.aggregate([
            {
                $group:{
                    _id: "$country", 
                    value:{
                        $sum: 1
                    }
                }
            },
            {
                $project:{
                    id: "$_id", 
                    value: 1, 
                    _id: 0
                }
            }
        ]);
    res.status(200).json(myData)
};
///Default bar1
const getAllEntriesDefaultbar1 = async(req,res) => {
    const myData = await Entry.aggregate([
   {
      $match: {
        country: "India",
        sector: "Energy"
      }
    },
    {
      $group: {
        _id: { country: "$country", sector: "$sector" },
        totalIntensity: { $sum: "$intensity" },
        totalImpact: { $sum: "$impact" },
        totalRelevance: { $sum: "$relevance" },
        totalLikelihood: { $sum: "$likelihood" }
      }
    },
    {
      $project: {
        _id: 0,
        sector: { $concat: ["$sector", " (", "$country", ")"] },
        country: "$_id.country",
        totalIntensity: 1,
        totalImpact: 1,
        totalRelevance: 1,
        totalLikelihood: 1
      },
    },
        ]);
    res.status(200).json(myData)
};
///Default bar2
const getAllEntriesDefaultbar2 = async(req,res) => {
    const myData = await Entry.aggregate([
  {
        $match: {
            pestle: "Political",
            country: "China",
            sector: { $ne: null }
        }
    },      
    {
        $group: {
            _id: { pestle: "$pestle", country: "$country", sector: "$sector" },
            sector_count: { $sum: 1 }
        }
    },
    {
        $project: {
            pestle: "$_id.pestle",
            country: "$_id.country",
            sector: "$_id.sector",
            sector_count: 1,
            _id: 0
        }
    },
    {
        $group: {
            _id: { country: "$country", pestle: { $concat: ["$pestle", " ($", "$country", ")"] } },
            data: {
                $push: {
                    sector: "$sector",
                    sector_count: "$sector_count"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            pestle: "$_id.pestle",
            country: "$_id.country",
            data: { $arrayToObject: { $map: { input: "$data", as: "item", in: [ "$$item.sector", "$$item.sector_count" ] } } }
        }
    },
    {
        $replaceRoot: {
            newRoot: {
                $mergeObjects: [
                    { pestle: "$pestle", country: "$country" },
                    "$data"
                ]
            }
        }
    }
        ]);
    res.status(200).json(myData)
};
///Default line
const getAllEntriesDefaultline = async(req,res) => {
    const myData = await Entry.aggregate([
    {
      $match: {
        country: "United States of America",
        sector: { $ne: null }
      }
    },
    {
      $group: {
        _id: { sector: "$sector" },
        count: { $sum: 1 }
      }
    },
    {
      $group: {
        _id: null,
        data: {
          $push: {
            x: "$_id.sector",
            y: "$count"
          }
        }
      }
    },
    {
      $project: {
        _id: 0,
        id: "United States of America",
        data: 1
      }
    }
        ]);
    res.status(200).json(myData)
};
///Default pie
const getAllEntriesDefaultpie = async(req,res) => {
    const myData = await Entry.aggregate([
    {
        $match: {
            country: "Iraq",
            sector: { $ne: null }
        }
    },     
    {
        $group: {
            _id: { country: "$country", sector: "$sector" },
            count: { $sum: 1 }
        }
    },
    {
        $sort: {
            "count": -1
        }
    },
    {
        $group: {
            _id: null,
            sectors: {
                $push: {
                    id: "$_id.sector",
                    value: "$count"
                }
            }
        }
    },
    {
        $unwind: "$sectors"
    },
    {
        $replaceRoot: { newRoot: "$sectors" }
    },
    {
        $limit: 5
    }
        ]);
    res.status(200).json(myData)
};

module.exports = {
    getAllEntriesTable,
    getAllEntriesTable1,
    getAllEntriesLine1,
    getAllEntriesLine2,
    getAllEntriesLine3,
    getAllEntriesLine4,
    getAllEntriesLine5,
    getAllEntriesLine6,
    getAllEntriesLine7,
    getAllEntriesLine8,
    getAllEntriesLine9,
    getAllEntriesLine10,
    getAllEntriesBar1,
    getAllEntriesBar2,
    getAllEntriesBar3,
    getAllEntriesBar4,
    getAllEntriesBar5,
    getAllEntriesBar6,
    getAllEntriesBar7,
    getAllEntriesBar8,
    getAllEntriesPie,
    getAllEntriesPie1,
    getAllEntriesPie2,
    getAllEntriesPie3,
    getAllEntriesPie4,
    getAllEntriesGeo,
    getAllEntriesDefaultbar1,
    getAllEntriesDefaultbar2,
    getAllEntriesDefaultline,
    getAllEntriesDefaultpie,
};