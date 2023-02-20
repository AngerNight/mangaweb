const express = require("express");
const router = express.Router();
const sequelize = require("../data/db");
const { Op } = require("sequelize");
const Manga = require("../models/manga");
const Category = require("../models/category");
const Episode = require("../models/episode");
const Image = require("../models/image");

// Page Search Api
router.get("/api/D3H6G1J7K2M8/:id", (req, res) => {
    const veri_id = req.params.id;
    Manga.findAll({
        where: {
            [Op.or]: [
                { manga_title: { [Op.like]: `%${veri_id}%` } },
                { manga_author: { [Op.like]: `%${veri_id}%` } }
            ]
        }
    })
        .then((mangas) => res.json(mangas))
        .catch((err) => console.log(err));
});
// Page Episode Detail
router.get("/comics/watch/:episodeid", async function (req, res) {
    const episodeid = req.params.episodeid;

    try {

        const episodes = await Image.findAll({
            where: {
                episode_id: episodeid,
            }
        });

        const episode = await Episode.findByPk(episodeid);

        if(episodes && episode){
            return res.render("pages/read.ejs", {
                episodes: episodes,
                episode:episode,
            });
        }

        res.redirect("/");


    } catch (error) {
        console.log(error);
    }

});
// Page Manga Detail
router.get("/comics/:slug", async function (req, res) {
    const slug = req.params.slug;

    try {

        const comic_id = await Manga.findOne({
            where: {
                manga_url: slug,
            }
        });

        const comicid = comic_id.manga_id;

        const mangas = await Manga.findByPk(comicid);

        const episodes = await Episode.findAll({
            where: {
                manga_id: comicid,
            }
        });

        const randommangas = await Manga.findAll({
            limit: 6,
            order: [
                sequelize.literal('rand()'),
            ]
        });
        const reserveepisodes = await Episode.findAll({
            where: {
                manga_id: comicid,
            },
            order: [
                ["episode_id", "DESC"]
            ]
        });

        const manga = await Manga.findAll({
            where: {
                manga_id: comicid,
            }
        });

        const update_num = 1;
        const manga_view = manga[0].manga_view;
        const view_update = manga_view + update_num;
            await Manga.update({ manga_view: view_update }, {
                where: {
                    manga_id: comicid,
                }
              });   
         

        const category_id = manga[0].manga_category;

        const category = await Category.findByPk(category_id);

     
        res.render("pages/detail.ejs", {
            mangas: mangas,
            episodes: episodes,
            randommangas: randommangas,
            reserveepisodes: reserveepisodes,
            category: category,
            view_update:view_update,
        });     

    } catch (error) {
        console.log(error);
    }

});
// Page Category
router.get("/comics", async function (req, res) {

    try {
        const mangas = await Manga.findAll({
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const fantazimangas = await Manga.findAll({
            where: {
                manga_category: 2,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const maceramangas = await Manga.findAll({
            where: {
                manga_category: 3,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const shounenmangas = await Manga.findAll({
            where: {
                manga_category: 4,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const hayattakalmamangas = await Manga.findAll({
            where: {
                manga_category: 5,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const intikammangas = await Manga.findAll({
            where: {
                manga_category: 6,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const dovussanatlarimangas = await Manga.findAll({
            where: {
                manga_category: 7,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const komedimangas = await Manga.findAll({
            where: {
                manga_category: 8,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const murimmangas = await Manga.findAll({
            where: {
                manga_category: 9,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const dogaustumangas = await Manga.findAll({
            where: {
                manga_category: 10,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const buyumangas = await Manga.findAll({
            where: {
                manga_category: 11,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const reenkarnasyonmangas = await Manga.findAll({
            where: {
                manga_category: 12,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const vahsetmangas = await Manga.findAll({
            where: {
                manga_category: 13,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const videooyunlarimangas = await Manga.findAll({
            where: {
                manga_category: 14,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const bilimkurgumangas = await Manga.findAll({
            where: {
                manga_category: 15,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const superguclermangas = await Manga.findAll({
            where: {
                manga_category: 16,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const geridonusmangas = await Manga.findAll({
            where: {
                manga_category: 17,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const gizemmangas = await Manga.findAll({
            where: {
                manga_category: 18,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const plusonaltimangas = await Manga.findAll({
            where: {
                manga_category: 19,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });


        res.render("pages/comic.ejs", {
            mangas: mangas,
            fantazimangas: fantazimangas,
            maceramangas: maceramangas,
            shounenmangas: shounenmangas,
            hayattakalmamangas: hayattakalmamangas,
            intikammangas: intikammangas,
            dovussanatlarimangas: dovussanatlarimangas,
            komedimangas: komedimangas,
            murimmangas: murimmangas,
            dogaustumangas: dogaustumangas,
            buyumangas: buyumangas,
            reenkarnasyonmangas: reenkarnasyonmangas,
            vahsetmangas: vahsetmangas,
            videooyunlarimangas: videooyunlarimangas,
            bilimkurgumangas: bilimkurgumangas,
            superguclermangas: superguclermangas,
            geridonusmangas: geridonusmangas,
            gizemmangas: gizemmangas,
            plusonaltimangas: plusonaltimangas,
        });
    } catch (error) {
        console.log(error);
    }

});
// Page Search
router.get("/search", async function (req, res) {


    try {

        const randommangas = await Manga.findAll({
            limit: 6,
            order: [
                sequelize.literal('rand()'),
            ]
        });

        res.render("pages/search.ejs", {
            randommangas: randommangas,

        });

    } catch (error) {
        console.log(error);
    }

});
// Page Main
router.get("/", async function (req, res) {
    try {
        const newmangas = await Manga.findAll({
            limit: 6,
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const completemangas = await Manga.findAll({
            limit: 6,
            where: {
                manga_complete: 1,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const fantazimangas = await Manga.findAll({
            limit: 6,
            where: {
                manga_category: 2,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const maceramangas = await Manga.findAll({
            limit: 6,
            where: {
                manga_category: 3,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const shounenmangas = await Manga.findAll({
            limit: 6,
            where: {
                manga_category: 4,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const hayattakalmamangas = await Manga.findAll({
            limit: 6,
            where: {
                manga_category: 5,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const intikammangas = await Manga.findAll({
            limit: 6,
            where: {
                manga_category: 6,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const dovussanatlarimangas = await Manga.findAll({
            limit: 6,
            where: {
                manga_category: 7,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const komedimangas = await Manga.findAll({
            limit: 6,
            where: {
                manga_category: 8,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const murimmangas = await Manga.findAll({
            limit: 6,
            where: {
                manga_category: 9,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const dogaustumangas = await Manga.findAll({
            limit: 6,
            where: {
                manga_category: 10,
            },
            order: [
                ["manga_id", "DESC"]
            ]
        });
        const updatemangas = await Manga.findAll({
            limit: 6,
            order: [
                ["updatedAt", "DESC"]
            ]
        });
        const randommangas = await Manga.findAll({
            limit: 6,
            order: [
                sequelize.literal('rand()'),
            ]
        });
        const toprandommangas = await Manga.findAll({
            limit: 2,
            order: [
                sequelize.literal('rand()'),
            ]
        });

        res.render("pages/main.ejs", {
            randommangas: randommangas,
            newmangas: newmangas,
            updatemangas: updatemangas,
            completemangas: completemangas,
            fantazimangas: fantazimangas,
            maceramangas: maceramangas,
            shounenmangas: shounenmangas,
            hayattakalmamangas: hayattakalmamangas,
            intikammangas: intikammangas,
            dovussanatlarimangas: dovussanatlarimangas,
            komedimangas: komedimangas,
            murimmangas: murimmangas,
            dogaustumangas: dogaustumangas,
            toprandommangas: toprandommangas,
        })
    } catch (error) {
        console.log(error);
    }

});
// Page Not Found
router.get('*', function(req, res) {
    res.redirect('/');
  });


module.exports = router;