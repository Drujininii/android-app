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

DROP DATABASE IF EXISTS android_app;
--
-- Name: android_app; Type: DATABASE; Schema: -; Owner: i.drujinin
--

CREATE DATABASE android_app WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';


ALTER DATABASE android_app OWNER TO "i.drujinin";

\connect android_app

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
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: citext; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: app_recipes; Type: TABLE; Schema: public; Owner: igor
--

CREATE TABLE public.app_recipes (
    recipe_id integer NOT NULL,
    recipe_name public.citext NOT NULL,
    recipe_text public.citext NOT NULL,
    recipe_products public.citext[]
);


ALTER TABLE public.app_recipes OWNER TO igor;

--
-- Name: app_recipes_recipe_id_seq; Type: SEQUENCE; Schema: public; Owner: igor
--

CREATE SEQUENCE public.app_recipes_recipe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.app_recipes_recipe_id_seq OWNER TO igor;

--
-- Name: app_recipes_recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: igor
--

ALTER SEQUENCE public.app_recipes_recipe_id_seq OWNED BY public.app_recipes.recipe_id;


--
-- Name: app_recipes recipe_id; Type: DEFAULT; Schema: public; Owner: igor
--

ALTER TABLE ONLY public.app_recipes ALTER COLUMN recipe_id SET DEFAULT nextval('public.app_recipes_recipe_id_seq'::regclass);


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
-- Name: app_recipes app_recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: igor
--

ALTER TABLE ONLY public.app_recipes
    ADD CONSTRAINT app_recipes_pkey PRIMARY KEY (recipe_id);


--
-- Name: app_recipes_recipe_id_uindex; Type: INDEX; Schema: public; Owner: igor
--

CREATE UNIQUE INDEX app_recipes_recipe_id_uindex ON public.app_recipes USING btree (recipe_id);


--
-- Name: app_recipes_recipe_name_uindex; Type: INDEX; Schema: public; Owner: igor
--

CREATE UNIQUE INDEX app_recipes_recipe_name_uindex ON public.app_recipes USING btree (recipe_name);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

