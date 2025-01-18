-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "page" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "page_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255),
	"email" varchar(255) NOT NULL,
	CONSTRAINT "page_email_unique" UNIQUE("email")
);

*/