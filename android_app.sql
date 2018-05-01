--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3
-- Dumped by pg_dump version 10.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: app_recipes; Type: TABLE DATA; Schema: public; Owner: igor
--

COPY public.app_recipes (recipe_id, recipe_name, recipe_text, recipe_products) FROM stdin;
4	Томат с хреном	Берете томат, нарезаете. Берете хрен, нарезаете	{томат,хрен}
5	Огурец с томатом	Берете огруец и томат и нарезаете	{огурец,томат}
6	Дошик	Возьмите кипяток, залейте дошик	{дошик}
7	Андройд	Возьмите 50 тысяч от своей запрлаты. Пойдите в мтс, купите на эти деньги говна и палок.\nПеремешайте говно и палки. Получите мобильный телефон. Теперь у вас есть телефон на платформе андройд	{говно,палки}
\.


--
-- Name: app_recipes_recipe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: igor
--

SELECT pg_catalog.setval('public.app_recipes_recipe_id_seq', 7, true);


--
-- PostgreSQL database dump complete
--

